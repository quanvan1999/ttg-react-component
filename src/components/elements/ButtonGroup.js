import React, {useState, useEffect, useRef} from 'react'
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
`;

const ButtonGroup = (props) => {
    let runInit = useRef(false)
    let {children} = props
    const [value, setValue] = useState("")
    useEffect(() => {
        // console.log("rn")
        if (!runInit.current) {
            // console.log("Btn group run")
            let defElement = children.find(child => child.props.default)
            if (defElement) {
                handleClick(defElement.props.value)
            }
            runInit.current = true
        }
        
    }, [])

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

    const handleClick = (value) => {
        setValue(value)
        props.onSelect(value)
    }

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
