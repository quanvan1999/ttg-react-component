import React from 'react';
import PropTypes from 'prop-types';
import escapeStringRegExp from 'escape-string-regexp';
import Completion from './Completion';
import styled from 'styled-components';


const StyleContainer= styled.div`
  padding:5px;
  & textarea{
    padding: 5px;
    font-size: 1rem;
  }
`
const StyleList= styled.div`
  border:1px solid;
  margin-top: 1px;
`
const StyleItems= styled.div`
  font-size:1rem;
  padding: 5px 10px;
`
const getRegex =({ regex, trigger }) => {
  if (regex) {
    return regex;
  }
  const t = escapeStringRegExp(trigger);
  return new RegExp(`.*(${t}.*?)$`);
}

const setCursor =(input, position) =>{
  input.setSelectionRange(position, position);
}

class AutoComplete extends React.Component {
  spanRef = Math.random().toString(36);

  constructor(props) {
    super(props);

    const { defaultValue } = props;
    this.state = {
      open: false,
      value: defaultValue || '',
      input: null,
      currentSuggestions: [],
      selectedSuggestion: 0,
    };
  }

  handleChange = (event) => {
    const { children, limit } = this.props;
    const { value, selectionEnd } = event.target;
    const completingValue = value.slice(0, selectionEnd);

    const completionTypes = React.Children
      .map(children, (child) => child.props)
      .reduce((types, completionType) => {
        const rx = getRegex(completionType);
        const match = rx.exec(completingValue);
        if (match) {
          const matchingValue = match[1] || match[0];
          if (matchingValue.length >= completionType.minLength) {
            types.push({
              type: completionType,
              regex: rx,
              matchingValue,
            });
          }
        }
        return types;
      }, []);

    const currentSuggestions = completionTypes.reduce((available, childProps) => {
      const { type, matchingValue } = childProps;
      const currentLimit = limit - available.length;
      // Don't even ask for more completions if we've already reached our max.
      if (currentLimit <= 0) {
        return available;
      }
      const completions = type.getCompletions(matchingValue, type).slice(0, currentLimit);
      return [
        ...available,
        ...completions.map((completion) => ({
          completion,
          ...childProps,
        })),
      ];
    }, []);

    this.setState({
      value,
      input: event.target,
      currentSuggestions,
      selectedSuggestion: 0,
    });

    const { inputProps } = this.props;
    if (inputProps.onChange && !event.defaultPrevented) {
      inputProps.onChange(event);
    }

    this.sendUpdate(value);
  };

  handleKeyDown = (event) => {
    const { selectedSuggestion, currentSuggestions } = this.state;
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (currentSuggestions.length > 0) {
        const nextSuggestion = selectedSuggestion > 0
          ? selectedSuggestion - 1
          : currentSuggestions.length - 1;
        this.setState({ selectedSuggestion: nextSuggestion });
      }
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (currentSuggestions.length > 0) {
        const nextSuggestion = (selectedSuggestion + 1) % currentSuggestions.length;
        this.setState({ selectedSuggestion: nextSuggestion });
      }
    } else if (event.key === 'Enter' || event.key === 'Tab') {
      if (currentSuggestions[selectedSuggestion]) {
        event.preventDefault();
        this.select(selectedSuggestion, event.target);
      }
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      const { target } = event;
      setTimeout(
        () => this.handleChange({ target }),
        1,
      );
    }

    // Bubble up manually if necessary
    const { inputProps } = this.props;
    if (inputProps.onKeyDown && !event.defaultPrevented) {
      inputProps.onKeyDown(event);
    }
  };

  handleFocus = (event) => {
    this.setState({ open: true });
    const { inputProps } = this.props;
    if (inputProps.onFocus) {
      inputProps.onFocus(event);
    }
  };

  handleBlur = (event) => {
    let parent = event.relatedTarget;
    while (parent) {
      if (parent.id === this.spanRef) return;
      parent = parent.parentNode;
    }

    this.setState({ open: false });
    const { inputProps } = this.props;
    if (inputProps.onBlur) {
      inputProps.onBlur(event);
    }
  };

  select = (idx, input) => {
    const { currentSuggestions, value } = this.state;
    const cursorPosition = input ? input.selectionEnd : value.length;
    const completion = currentSuggestions[idx];
    if (input) {
      const { type, matchingValue } = completion;
      const before = value.slice(0, cursorPosition - matchingValue.length);
      const after = value.slice(cursorPosition);
      const insertValue = type.getText(completion.completion, type);
      const newValue = `${before}${insertValue}${after}`;

      this.setState({
        value: newValue,
        currentSuggestions: [],
      }, () => {
        input.focus();
        setCursor(input, before.length + insertValue.length);
      });

      this.sendUpdate(newValue);
    }
  };

  sendUpdate(value) {
    const { onUpdate } = this.props;

    onUpdate(value);
  }

  renderSuggestion({ type, completion }, idx) {
    const { renderSuggestion } = this.props;
    const { input, selectedSuggestion } = this.state;

    // Use the Completion type's suggestion renderer, or the default if it
    // doesn't have a custom one.
    const render = type.renderSuggestion || renderSuggestion;
    return render({
      key: `${idx}`,
      value: completion,
      selected: idx === selectedSuggestion,
      select: () => this.select(idx, input),
    });
    
  }

  renderSuggestions() {
    const { renderSuggestions } = this.props;
    const { currentSuggestions } = this.state;

    const suggestions = currentSuggestions.map(this.renderSuggestion, this);
    return renderSuggestions(suggestions);
  }

  render() {
    const {
      open,
      currentSuggestions,
      value: stateValue,
    } = this.state;
    const {
      inputComponent: InputComponent,
      inputProps,
      value: propsValue,
      width
    } = this.props;

    const value = propsValue !== undefined ? propsValue : stateValue;

    return (
      <StyleContainer onBlur={this.handleBlur} onFocus={this.handleFocus} id={this.spanRef}>
        <InputComponent
          {...inputProps} // eslint-disable-line react/jsx-props-no-spreading
          value={value}
          style={{width}}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        {open && currentSuggestions.length > 0 ? this.renderSuggestions() : null}
      </StyleContainer>
    );
  }
}

AutoComplete.defaultProps = {
  inputComponent: 'textarea',
  inputProps: {
    type: 'text',
  },
  renderSuggestion: ({
    key,
    value,
    selected,
    select,
  }) => (
    <StyleItems
      key={key}
      style={{ background: selected ? '#eee' : '#fff'}}
      onClick={select}
      onKeyDown={(event) => event.key === 'Enter' && select()}
    >
      {value}
    </StyleItems>
  ),
  renderSuggestions: (suggestions) => (
    <StyleList>
      {suggestions}
    </StyleList>
  ),
  children: [],
  limit: 15,
  defaultValue: '',
  onUpdate: () => {},
};

if (process.env.NODE_ENV !== 'production') {
  AutoComplete.propTypes = {
    inputComponent: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),
    inputProps: PropTypes.object,
    renderSuggestion: PropTypes.func,
    renderSuggestions: PropTypes.func,
    children: PropTypes.node,
    limit: PropTypes.number,
    value: PropTypes.string, 
    defaultValue: PropTypes.string,
    onUpdate: PropTypes.func,
  };
}

export { Completion };
export default AutoComplete;