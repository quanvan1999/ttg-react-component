import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import PropTypes from 'prop-types'

const StyleChkGroup = styled.div`
    display: ${props => props.fullWidth ? "flex" : "inline-flex"};
    flex-direction: ${props => props.horizontal ? "row" : "column"};
`;
const CheckboxGroup = (props) =>{
    useEffect(() => {
        props.onSelect(value)
        props.children.forEach(child => {
            if (child.type !== Checkbox)
                throw Error("Children of CheckboxGroup must be Checkbox")
            else if (child.props.value === undefined)
                throw Error("Children must contain props 'value' ")
        })
    })

    const [value, setValue] = useState(props.children.map(child => {return {value: child.props.value, checked: child.props.default}}))

    const handleClick = (obj) => {
        setValue([...value.filter(x => x.value !== obj.value), obj])
    }

    return (
        <StyleChkGroup {...props}>
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
        </StyleChkGroup>
    )
}
CheckboxGroup.propTypes= {
    className: PropTypes.string,
    onSelect: PropTypes.func,
    displayMode: PropTypes.oneOf(["edit", "view", "disabled"]),
    name:PropTypes.string,
    fullWidth: PropTypes.bool,
    horizontal: PropTypes.bool
}
CheckboxGroup.defaultProps = {
    onSelect: (x) => console.log(x),
    displayMode: "edit",
    fullWidth: false,
    horizontal: false
}

export default CheckboxGroup