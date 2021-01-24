import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import Button from './Button';
import PropTypes from 'prop-types'

const StyledButtonGroup = styled.div`
    --fillColor: ${props => props.theme.color.fill[props.color] || props.theme.color.fill.primary};
    margin: ${props => props.demo ? "8px": "0px"};
    padding: 0px;
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    border-radius: 4px;
    overflow: hidden;
    background: transparent; //${props => props.theme.color.background.secondary};
    border: 0px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : "var(--fillColor)"};
    box-shadow: ${props => props.theme.shadow};
`;

const ButtonGroup = (props) => {
    let byClick = useRef(false)
    let {children, onSelect} = props
    let defaultChild = children.find(child => child.props.default)
    const [value, setValue] = useState(defaultChild ? defaultChild.props.value : "")
    
    const handleClick = (value) => {
        setValue(value)
        if (!byClick.current)
            byClick.current = true
    }
    useEffect(() => {
        if (byClick.current)
            onSelect(value)
    }, [onSelect, value])

    useEffect(() => {
        // Catching errors
        children.forEach(child => {
            if (child.type !== Button)
                throw Error("Children of ButtonGroup must be Button")
            else if (child.props.value === undefined)
                throw Error("Children must contain props 'value' ")
        })
        if (children.filter(child => child.props.default).length > 1)
            throw Error("Cannot have more than one default value")
    }, [children])

    return (
        <StyledButtonGroup {...props}>
            {React.Children.map(props.children, (child, idx) => {
                return React.cloneElement(
                    child, 
                    {
                        fullWidth: false, 
                        demo: false, 
                        equalSize: props.equalSize,
                        displayMode: props.displayMode,
                        color: props.color,
                        ingroup: idx === 0 ? "left" : idx === props.children.length - 1 ? "right" : "middle", 
                        type: value === child.props.value ? "contained": "outline", 
                        onSelect: () => handleClick(child.props.value)})
            })}
        </StyledButtonGroup>
    )
}
ButtonGroup.propTypes ={
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    onSelect:PropTypes.func,
    fullWidth: PropTypes.bool,
    theme:PropTypes.string,
    color: PropTypes.string,
    equalSize: PropTypes.bool
}
ButtonGroup.defaultProps = {
    onSelect: (x) => {},
    fullWidth: false,
    displayMode: "edit",
    color: "primary"
}
export default ButtonGroup
