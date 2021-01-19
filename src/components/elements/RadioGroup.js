import React, { useEffect } from 'react'
import RadioButton from './Radio'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledRadioGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
`

const RadioGroup = (props) => {
    //Catching errors
    props.children.forEach(child => {
        if (child.type !== RadioButton)
            throw Error("Children of RadioGroup must be RadioButton")
        else if (child.props.value === undefined)
            throw Error("Children must contain props 'value' ")
    })
    if (props.children.filter(child => child.props.default).length > 1)
        throw Error("Cannot have more than one default value")
    //================

    const handleClick = (value) => {
        props.onSelect(value)
    }

    useEffect(() => {
        let defElement = props.children.find(child => child.props.default)
        if (defElement) {
            props.onSelect(defElement.props.value)
        }
    }, [props])

    return (
        <StyledRadioGroup {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, 
                    {
                        name: props.name || (new Date()).getTime().toString(), 
                        onSelect: () => handleClick(child.props.value), 
                        displayMode: props.displayMode,
                        ingroup: true
                    })
            })
        }
        </StyledRadioGroup>
    )
}
RadioGroup.propTypes = {
    className: PropTypes.string,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    onSelect: PropTypes.func,
    name:PropTypes.string,
    fullWidth: PropTypes.bool,
    horizontal: PropTypes.bool
}
RadioGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    displayMode: "edit",
    fullWidth: false,
    horizontal:false
}

export default RadioGroup