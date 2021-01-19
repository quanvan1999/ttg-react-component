import React, { useEffect } from 'react'
import styled from 'styled-components'
import {getFader} from '../../utils/color'
import PropTypes from 'prop-types'

const RadioLabel = styled.label`
    display: inline-block;
    position: relative;
    padding: 4px 8px 4px 1.5rem;
    margin-right: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    user-select: none;
`;

const InputRadio = styled.input`
    display: none;

    //update the dot when checked
    &:checked ~ span:after {
        background-color: ${props => props.displayMode === "disabled" ? "#A0A0A0" : props.theme.color.fill.primary};
        border-radius: 50%;
    }
    &:checked ~ span {
        border-color: ${props => props.displayMode === "disabled" ? props.theme.color.text.disabled : props.theme.color.fill.primary};
    }
`;

const ValueInput = styled.p`
    color:${props => props.displayMode === "disabled" ? props.theme.color.text.disabled : props.theme.color.text.primary};
    display: inline-block;
`;

const SpanRadio = styled.span`
    // the ring
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0rem;
    height: 1.2rem;
    width: 1.2rem;
    border: 2px solid ${props => props.displayMode === "disabled" ? props.theme.color.text.disabled : getFader(props.theme.color.fill.primary, 0.4)};
    border-radius: 50%;
    background: transparent;

    &:hover {
        box-shadow: 0px 0px 16px ${props => getFader(props.theme.color.fill.primary, 0.8)};
    }

    //the dot
    &::after {
        content: "";
        position: absolute;
        display: inline-block;
        top: 50%;
        transform: translate(-50%,-50%);
        left: 50%;
        height: 0.6rem;
        width: 0.6rem;
        border-radius: 50%;
        background: transparent;
        transition: background 0.15s linear;
   }
`;

const Radio = (props) => {
    useEffect(() => {
        if (!props.ingroup)
            throw Error("Radio must be placed in RadioGroup")
    })
    return (
        <RadioLabel onClick={(e) => props.onSelect(e.target.value)}>
            <ValueInput displayMode={props.displayMode}>{props.children}</ValueInput>
            <InputRadio displayMode={props.displayMode} type="radio" name={props.name} value={props.value} defaultChecked={props.default}/>
            <SpanRadio displayMode={props.displayMode}/>
        </RadioLabel>
    )
}
Radio.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    default: PropTypes.bool,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    name:PropTypes.string,
    ingroup: PropTypes.bool,
    theme: PropTypes.string
}
Radio.defaultProps = {
    onSelect: (x) => console.log(x),
    default: false,
    displayMode: "edit",
    disabled: false
}

export default Radio