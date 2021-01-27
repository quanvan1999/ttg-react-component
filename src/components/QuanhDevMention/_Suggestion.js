import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getSubstringIndex } from './utils'
import styled from 'styled-components'

const StyledLi = styled.li`
  line-height: 2rem;
  border-bottom: 1px solid #CCC;
  cursor: pointer;
  list-style: none;
  padding: 2px 8px;
  color: #333;
  background-color: ${props => props.focus ? "#EEE" : "inherit"};

  &:hover {
    background-color: #CCC;
  }
`

const Suggestion = (props) => {
  
  const renderContent = () => {
    let { query, renderSuggestion, suggestion, index, focused } = props

    let display = getDisplay()
    let highlightedDisplay = renderHighlightedDisplay(display, query)

    if (renderSuggestion) {
      return renderSuggestion(
        suggestion,
        query,
        highlightedDisplay,
        index,
        focused
      )
    }
    return highlightedDisplay
  }

  const getDisplay = () => props.suggestion.display

  const renderHighlightedDisplay = (display) => {
    const { ignoreAccents, query } = props

    let i = getSubstringIndex(display, query, ignoreAccents)

    if (i === -1) {
      return <span>{display}</span>
    }

    return (
      <span focus={props.focused}>
        {display.substring(0, i)}
        <b>{display.substring(i, i + query.length)}</b>
        {display.substring(i + query.length)}
      </span>
    )
  }
  return (
    <StyledLi {...props}>
      {renderContent()}
    </StyledLi>
  )

}
Suggestion.propTypes = {
  query: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  ignoreAccents: PropTypes.bool,

  suggestion: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      display: PropTypes.string,
    }).isRequired,
  renderSuggestion: PropTypes.func,
  focused: PropTypes.bool,
}

export default Suggestion
