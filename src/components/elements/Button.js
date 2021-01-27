import styled from 'styled-components'
import {getDarker, getLighter} from '../../utils/color'
import PropTypes from 'prop-types'
import {StyledButtonGroup} from './ButtonGroup'
const StyledButton = styled.button`
    --textColor: ${props => props.theme.color.background.primary};
    --darkTextColor: ${props => getDarker(props.theme.color.background.primary)};
    --lightTextColor: ${props => getLighter(props.theme.color.background.primary)};
    --fillColor: ${props => props.theme.color.fill[props.color] || props.theme.color.fill.primary};
    --darkFillColor: ${props => getDarker(props.theme.color.fill[props.color] || props.theme.color.fill.primary)};
    --lightFillColor: ${props => getLighter(props.theme.color.fill[props.color] || props.theme.color.fill.primary)};
    --disabledTextColor: ${props => props.theme.color.text.disabled};
    --disabledFillColor: ${props => props.theme.color.fill.disabled};
    margin: ${props => props.demo? "8px": "0px"};
    padding: ${props => props.round ? "2px" : props.type === "outline" ? "5px 15px" : "6px 16px"};
    transition: background 0.15s linear;
    font-size: ${props => props.theme.textSize[props.size] || "1rem" };
    font-weight: ${props => props.theme.weight[props.fontWeight] || 500};
    cursor: pointer;
    outline: none;
    user-select: none;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
    color:${props => props.type === "contained" ? "var(--textColor)" : "var(--fillColor)"};
    background: ${props=>props.type === "contained" ? "var(--fillColor)" : "transparent"};
    flex: ${props => props.equalSize ? "1" : "none"};
    border-style: solid;
    border-color: var(--fillColor);
    border-width: ${props => props.type === "outline" ? "1px": "0px"};
    border-radius: ${props => props.round ? "999px" : "4px"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%": "auto"};
    box-shadow: ${props => props.type === "contained" ? props.theme.shadow : "none"};
    &:hover {
        color: ${props => props.type === "contained" ? "var(--textColor)" : props.type === "outline" ? "var(--fillColor)" : "var(--darkFillColor)"};
        background: ${props => props.type === "contained" ? "var(--lightFillColor)" : props.type === "outline" ? "var(--darkTextColor)" : "transparent"};
    }
    &:disabled { 
        color: var(--disabledTextColor);
        background-color: ${props => props.type === "contained"? "var(--disabledFillColor)": "var(--textColor)"};
        border-color: ${props => props.type === "outline" ? "var(--disabledTextColor)" : "transparent"};
    }
    &:active {
        color: ${props => props.type === "contained" ? "var(--fillColor)" : props.type === "outline" ? "var(--textColor)" : "var(--lightFillColor)"};
        background: ${props => props.type === "contained" ? "var(--textColor)" : props.type === "outline" ? "var(--fillColor)" : "transparent"};
    }

    ${StyledButtonGroup} & {
        border: none;
        border-radius: 0;
        box-shadow: none;
        padding: 5px 15px;
    }
`;

const Button = (props) => {
    let isDisabled = props.displayMode === "disabled" || props.disabled
    return (
        <StyledButton {...props} disabled={isDisabled} onClick={props.onSelect}>
        {props.children}
        </StyledButton>
    )
}

Button.defaultProps = {
    color: "primary",
    type: "contained",
    displayMode: "edit",
    size: "medium",
    disabled: false,
    onSelect: (e) => {},
    default: false
}

Button.propTypes ={
    color: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    size: PropTypes.string,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    onSelect:PropTypes.func,
    default: PropTypes.bool,
    round: PropTypes.bool
}
export default Button