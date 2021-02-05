import React from 'react'
import PropTypes from 'prop-types'
import useStyles from 'substyle'
import styled from 'styled-components'

const StyledMention = styled.strong`
  font-weight: inherit;
`

const defaultStyle = {
  fontWeight: 'inherit',
}

const Mention = ({ display, style, className, classNames }) => {
  const styles = useStyles(defaultStyle, { style, className, classNames })
  return <StyledMention>{display}</StyledMention>
}

Mention.propTypes = {
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  renderSuggestion: PropTypes.func,
  trigger: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(RegExp),
  ]),
  markup: PropTypes.string,
  displayTransform: PropTypes.func,
  allowSpaceInQuery: PropTypes.bool,
  isLoading: PropTypes.bool,
}

Mention.defaultProps = {
  trigger: '@',
  markup: '@[__display__](__id__)',
  displayTransform: function(id, display) {
    return display || id
  },
  onAdd: () => {},
  onRemove: () => {},
  renderSuggestion: null,
  isLoading: false,
  appendSpaceOnAdd: false,
}

export default Mention
