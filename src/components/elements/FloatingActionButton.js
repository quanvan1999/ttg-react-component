import styled from 'styled-components'
import {getDarker, getLighter} from '../../utils/color'
import PropTypes from 'prop-types'
const StyleFloatDiv=styled.div`
    position:fixed;
    margin: 1em;
    ${props => props.position ? "left:1vh" : "right:5vh"};
    bottom: 5vh;
`;
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
    padding: 7px 5px;
    transition: background 0.15s linear;
    font-size: ${props => props.theme.FBText[props.size] || "14px" };
    font-weight: ${props => props.theme.weight[props.fontWeight] || 500};
    cursor: pointer;
    outline: none;
    user-select: none;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
    color:${props => props.type === "contained" ? "var(--textColor)" : "var(--fillColor)"};
    background: ${props=>props.type === "contained" ? "var(--fillColor)" : "var(--textColor)"};
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    align-items:center;
    justify-content:center;
    border-style: solid;
    border-color: var(--fillColor);
    border-width: ${props => props.ingroup === "left" ? "0 1px 0 0" : props.ingroup === "right" ? "0 0 0 1px" : props.ingroup === "middle" ? "0 1px 0 1px" : props.type === "outline" ? "2px": "0px"};
    border-radius:  ${props => props.fullWidth ? "24px" :  "50%" };
    margin:0 10px;
    width:  ${props => props.fullWidth ? "100%" : props.theme.FBSize[props.size] || "46px" };
    height:  ${props => props.fullWidth ? "100%" : props.theme.FBSize[props.size] || "46px" };

    box-shadow: ${props => props.type === "contained" ? "0px 2px 4px rgba(0,0,0,0.64)" : "none"};
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
    & svg{
        width:  ${props => props.theme.svgSize[props.size] || "22px" };
        height:  ${props => props.theme.svgSize[props.size] || "22px" };
    }
    &>span>span{
        margin-right: ${props => props.fullWidth ? "8px" : "0"};
    }
`;
const StyleFAB = styled.span`
    display:block;
`;

const Button = (props) => {
    return (
        <StyleFloatDiv {...props}>
            <StyledButton {...props} disabled={props.displayMode === "disabled" || props.disabled} onClick={props.onClick} onClick={props.onSelect}>
                <StyleFAB>{props.children}</StyleFAB>
            </StyledButton>
        </StyleFloatDiv>
    )
}

Button.defaultProps = {
    color: "primary",
    icon: "",
    type: "contained",
    position: false,
    displayMode: "edit",
    size: "medium",
    disabled: false,
    onClick: () => {},
    onSelect: () => {}
}

Button.propTypes ={
    color: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.element,
    theme: PropTypes.string,
    size: PropTypes.string,
    position: PropTypes.bool,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    fullWidth: PropTypes.bool,
    type: PropTypes.string,
    onSelect: PropTypes.func,
    onClick:PropTypes.func
}
export default Button