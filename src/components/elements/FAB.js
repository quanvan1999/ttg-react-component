import styled from 'styled-components'
import PropTypes from 'prop-types'
import React from 'react'
const StyledButton = styled.button`
    --textColor: ${props => props.theme.color.background.primary};
    --fillColor: ${props => props.theme.color.fill[props.color] || props.theme.color.fill.primary};

    position:fixed;
    ${props => props.position ? "left: 1rem" : "right: 1rem"};
    bottom: 2rem;
    padding: 12px;
    border: none;
    transition: background 0.15s linear;
    font-size: ${props => props.theme.textSize[props.size] || props.theme.textSize.medium};
    font-weight: ${props => props.theme.weight[props.fontWeight] || props.theme.weight.normal};
    cursor: pointer;
    outline: none;
    user-select: none;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
    color: var(--textColor);
    background: var(--fillColor);
    border-radius:  999px;
    z-index: 999;
    box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);

    &:active {
        color: var(--fillColor);
        background: var(--textColor);
    }
    &:disabled { 
        color: ${props => props.theme.color.text.disabled};
        background-color: ${props => props.theme.color.fill.disabled};
    }
`;

const FAB = (props) => {
    return (
        <StyledButton {...props} disabled={props.displayMode === "disabled" || props.disabled} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}

FAB.defaultProps = {
    color: "primary",
    position: false,
    displayMode: "edit",
    size: "medium",
    disabled: false,
    onClick: () => {},
    onSelect: () => {}
}

FAB.propTypes ={
    color: PropTypes.string,
    theme: PropTypes.string,
    size: PropTypes.oneOf(["small", "medium", "large"]),
    position: PropTypes.bool,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    onClick:PropTypes.func
}
export default FAB