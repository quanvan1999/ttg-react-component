import styled from 'styled-components'
import {getFader} from '../../utils/color'
import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const LabelCheckbox = styled.label`
    display: inline-block;
    position: relative;
    padding: 4px 8px 4px 1.5rem;
    cursor: pointer;
    user-select: none;
    pointer-events: ${props => props.displayMode !== "edit" ? "none" : "auto"};
`;
const InputChkbox = styled.input`
    display: none;
    &:checked ~ span:after {
        border-color: ${props => props.displayMode === "disabled" ? "#A0A0A0" : "var(--fillColor)"};
    }
    &:checked ~ span {
        border-color: ${props => props.displayMode === "disabled" ? "var(--disabledTextColor)" : "var(--fillColor)"};
    }
`;
const SpanChkBox = styled.span`
    --fillColor: ${props => props.theme.color.fill[props.color] || props.theme.color.fill.primary};
    --textColor: ${props => props.theme.color.background.primary};
    --disabledTextColor: ${props => props.theme.color.text.disabled};
    display:block;  
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0rem;
    height:1.2rem;
    width: 1.2rem;
    background-color: transparent;
    border-radius: 4px;
    border:2px solid ${props => props.displayMode === "disabled" ? "var(--disabledTextColor)" : getFader(props.theme.color.fill.primary, 0.4)};
    &:after{
        transition: border-color 0.15s linear;
        content: "";
        position: absolute;
        left: 0.25rem;
        top: 0.05rem;
        width: 0.25rem;
        height: 0.5rem;
        border-style: solid;
        border-color: transparent;
        border-width: 0 0.2rem 0.2rem 0;
        transform: rotate(45deg);
    }
    &:hover{
        box-shadow: 0px 0px 16px ${props => getFader(props.theme.color.fill.primary, 0.8)};
    }
`;

const SpanChkName= styled.span`
    --disabledTextColor: ${props => props.theme.color.text.disabled};
    display:block;
    font-size:1rem;
    color: ${props => props.displayMode === "disabled" ? "var(--disabledTextColor)": "var(--textColor)"};
`;


const Checkbox = (props) => {
    const [mount, setMount] = useState(false)
    const [checked, setChecked] = useState(props.default)

    useEffect(() => {
        if (!mount) {
            props.onSelect(checked)
            setMount(true)
        }
    },[mount, checked, props])

    const handleSelect = (e) => {
        setChecked(e.target.checked)
        props.onSelect(e.target.checked)
    }

    return(
        <LabelCheckbox {...props} displayMode={props.disabled ? "disabled" : props.displayMode}>
            <InputChkbox displayMode={props.disabled ? "disabled" : props.displayMode} 
                type="checkbox" 
                name={props.name} 
                value={props.value} 
                onChange={handleSelect} 
                defaultChecked={props.default}
            />
            <SpanChkBox displayMode={props.disabled ? "disabled" : props.displayMode}/>
            <SpanChkName displayMode={props.disabled ? "disabled" : props.displayMode}>{props.children}</SpanChkName>
        </LabelCheckbox>
    )
}
Checkbox.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    default: PropTypes.bool,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    name:PropTypes.string,
    theme: PropTypes.string,
    onSelect: PropTypes.func
}
Checkbox.defaultProps = {
    onSelect: (x) => console.log(x),
    default: false,
    displayMode: "edit",
    disabled: false
}
export default Checkbox