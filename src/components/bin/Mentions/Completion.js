/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

class Completion extends React.Component {
  render() { return null; }
}

Completion.propTypes = {
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp),
  ]).isRequired,
  minLength: PropTypes.number,
  regex: PropTypes.instanceOf(RegExp),
  renderSuggestion: PropTypes.func,
  getCompletions: PropTypes.func,
  completions: PropTypes.array,
  getText: PropTypes.func,
};

Completion.defaultProps = {
  minLength: 3,
  regex: null,
  renderSuggestion: null,
  getCompletions: (value, { trigger, completions }) => {
    const compare = value.substr(trigger.length).toLowerCase();
    return completions.filter((completion) => (
      completion.substr(0, compare.length).toLowerCase() === compare
    ));
  },
  completions: [],
  getText: (value, { trigger }) => `${trigger}${value} `,
};

export default Completion;