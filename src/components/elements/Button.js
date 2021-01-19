import styled from 'styled-components'
import {getDarker, getLighter} from '../../utils/color'
import PropTypes from 'prop-types'

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
    padding: ${props => props.ingroup ? "2px 12px" : props.type === "outline" ? "2px 13px" : "4px 14px"};
    transition: background 0.15s linear;
    font-size: ${props => props.theme.textSize[props.size] || "1rem" };
    font-weight: ${props => props.theme.weight[props.fontWeight] || 500};
    cursor: pointer;
    outline: none;
    user-select: none;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
    color:${props => props.type === "contained" ? "var(--textColor)" : "var(--fillColor)"};
    background: ${props=>props.type === "contained" ? "var(--fillColor)" : "transparent"};
    flex: 1;
    border-style: solid;
    border-color: ${props => props.ingroup ? props.theme.color.border.primary : "var(--fillColor)"};
    border-width: ${props => props.ingroup === "left" ? "0 1px 0 0" : props.ingroup === "right" ? "0 0 0 1px" : props.ingroup === "middle" ? "0 1px 0 1px" : props.type === "outline" ? "1px": "0px"};
    border-radius: ${props => props.ingroup ? "0" : "4px"};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    width: ${props => props.fullWidth ? "100%": "auto"};
    box-shadow: ${props => props.ingroup ? "none" : props.type === "contained" ? "0px 2px 4px rgba(0,0,0,0.64)" : "none"};
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
`;
const Button = (props) => {
    return (
        <StyledButton {...props} disabled={props.displayMode === "disabled" || props.disabled}>
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
    onClick: () => {}
}
Button.propTypes ={
    color: PropTypes.string,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    size: PropTypes.string,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    onClick:PropTypes.func
}
export default Button