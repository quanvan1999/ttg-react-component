import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Button from './Button';
import PropTypes from 'prop-types'

const StyledButtonGroup = styled.div`
    --fillColor: ${props => props.theme.color.fill[props.color] || props.theme.color.fill.primary};
    margin: ${props => props.demo ? "8px": "0px"};
    padding: 0px;
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    align-items: flex-start;
    border-radius: 4px;
    overflow: hidden;
    background: ${props => props.theme.color.background.secondary};
    border: 0px solid ${props => props.displayMode === "disabled" ? "#A3A3A3" : "var(--fillColor)"};
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
`;

const ButtonGroup = (props) => {
    let {onSelect, children} = props
    const [value, setValue] = useState(children.find(child => child.props.default) ? children.find(child => child.props.default).props.value : "")
    const handleClick = (value) => {
        setValue(value)
    }
    useEffect(() => {
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
                        displayMode: props.displayMode,
                        color: props.color,
                        ingroup: idx === 0 ? "left" : idx === props.children.length - 1 ? "right" : "middle", 
                        type: value === child.props.value ? "contained": "outline", 
                        onClick: () => handleClick(child.props.value)})
            })}
        </StyledButtonGroup>
    )
}
ButtonGroup.propTypes ={
    className: PropTypes.string,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    name:PropTypes.string,
    onClick:PropTypes.func,
    onSelect:PropTypes.func,
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    theme:PropTypes.string,
    color: PropTypes.string
}
ButtonGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    fullWidth: false,
    displayMode: "edit",
    color: "primary"
}
export default ButtonGroup
