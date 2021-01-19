import React, { useEffect,useState} from 'react'
import styled from 'styled-components'
import  Toggle  from './Toggle'
import PropTypes from "prop-types"

const StyleGroup = styled.div`
display: ${props => props.fullWidth ? "flex" : "inline-flex"};
flex-direction: ${props => props.horizontal ? "row" : "column"};
`;
const ToggleGroup = (props) =>{
    useEffect(() => {
        props.onSelect(value)
        props.children.forEach(child => {
            if (child.type !== Toggle)
                throw Error("Children of ToggleGroup must be Toggle")
            else if (child.props.value === undefined)
                throw Error("Children must contain props 'value' ")
        })
    })

    const [value, setValue] = useState(props.children.map(child => {return {value: child.props.value, checked: child.props.default}}))

    const handleClick = (obj) => {
        setValue([...value.filter(x => x.value !== obj.value), obj])
    }
    
    return (
        <StyleGroup {...props}>
        {
             React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, {
                        name: props.name || (new Date()).getTime().toString(), 
                        onSelect: (checked) => handleClick({value: child.props.value, checked: checked}),
                        displayMode: props.displayMode
                    })
            })
        }
        </StyleGroup>
    )
}
ToggleGroup.propTypes={
    className: PropTypes.string,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    onSelect: PropTypes.func,
    name:PropTypes.string,
    fullWidth: PropTypes.bool,
    horizontal: PropTypes.bool,
}
ToggleGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    displayMode: "edit",
    position: false,
    fullWidth:false,
    horizontal:false,
}
export default ToggleGroup