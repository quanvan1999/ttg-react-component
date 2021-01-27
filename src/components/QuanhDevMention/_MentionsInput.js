import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

const KEY = { TAB: 9, RETURN: 13, ESC: 27, UP: 38, DOWN: 40 }
let isComposing = false

const MentionsInput = (props) => {
    const suggestions = useRef({})
    const uuid = useRef(Math.random().toString().substring(2))
    const containerRef = useRef()
    const [state, setState] = useState({
        focusIndex: 0,
        selectionStart: null,
        selectionEnd: null,
        suggestions: {},
        caretPosition: null,
        suggestionPosition: {}
    })
    useEffect(() => {
        document.addEventListener('copy', handleCopy)
        document.addEventListener('cut', handleCut)
        document.addEventListener('paste', handlePaste)
        updateSuggestionsPosition()

        return (() => {
            document.removeEventListener('copy', handleCopy)
            document.removeEventListener('cut', handleCut)
            document.removeEventListener('paste', handlePaste)
        })
    })
    const handleCopy = () => {}
    const handleCut = () => {}
    const handlePaste = () => {}
    const updateSuggestionsPosition = () => {}

    const renderControl = () => {}
    const renderSuggestionsOverlay = () => {}

    return (
        <div ref={containerRef}>
            {renderControl()}
            {renderSuggestionsOverlay()}
        </div>
    )
}
MentionsInput.propTypes = {
    singleLine: PropTypes.bool,
    allowSpaceInQuery: PropTypes.bool,
    allowSuggestionsAboveCursor: PropTypes.bool,
    ignoreAccents: PropTypes.bool,
    a11ySuggestionsListLabel: PropTypes.string,

    value: PropTypes.string,
    onKeyDown: PropTypes.func,
    onSelect: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    suggestionsPortalHost:
        typeof Element === 'undefined'
        ? PropTypes.any
        : PropTypes.PropTypes.instanceOf(Element),
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({
        current:
            typeof Element === 'undefined'
            ? PropTypes.any
            : PropTypes.instanceOf(Element),
    }),
]),

    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
}
MentionsInput.defaultProps = {
    ignoreAccents: false,
    singleLine: false,
    allowSuggestionsAboveCursor: false,
    onKeyDown: () => null,
    onSelect: () => null,
    onBlur: () => null
}