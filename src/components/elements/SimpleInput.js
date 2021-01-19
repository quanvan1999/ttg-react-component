//Made by La Quoc Anh
import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import { getFader } from '../../utils/color'
import PropTypes from 'prop-types'
const StyledInput = styled.input`
    margin: ${props => props.demo? "8px": "0px"};
    color: ${props => props.theme.color.text.primary};
    padding: 4px 8px;
    border: 2px solid ${props => getFader(props.theme.color.fill.primary, 0.4)};
    outline: 0;
    border-radius: 5px;
    font-size: ${props => props.theme.textSize.medium};
    transition: border 0.15s linear;
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%" : "auto"};
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
    background-color: transparent;
    &:disabled {
        color: ${props => props.theme.color.text.disabled};
        border-color: ${props => props.theme.color.fill.disabled};
    }
    &:focus {
        border-color: ${props => props.theme.color.fill.primary};
    }
`;

const SimpleInput = (props) => {
    let runInit = useRef(false)
    let {defaultValue, onChange} = props
    const [value, setValue] = useState(props.defaultValue || "")
    const handleChange = (v) => {
        setValue(v)
        props.onChange(v)
    }
    useEffect(() => {
        if (!runInit.current) {
            // console.log("I run")
            if (defaultValue) 
                onChange(defaultValue)
            runInit.current = true
        }
    }, [defaultValue, onChange])
    return <StyledInput 
                type="text" {...props} 
                disabled={props.displayMode === "disabled" || props.disabled}
                spellCheck="false"
                placeholder={props.placeholder}
                onChange={(e) => handleChange(e.target.value)}
                value={value}
            />
}

SimpleInput.propTypes = {
    demo: PropTypes.bool,
    placeholder: PropTypes.string,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    fullWidth: PropTypes.bool,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}
SimpleInput.defaultProps = {
    placeholder: "",
    defaultValue: "",
    displayMode: "edit",
    fullWidth: false,
    onChange: (x) => {}
}

export default SimpleInput
