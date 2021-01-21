import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RippleButton from "./RippleButton"
import Avatar from "./elements/Avatar"
import Icon from "./elements/Icon";
import Button from "./elements/Button"
import Link from "./elements/Link";
const StyleItem = styled.div`
    display:flex;
    margin:0;
    padding: 5px 10px;
    color:#000;
    background:transparent;

`;



const ListItem = (props) => {

 

    const handleClick = (props)=>{
        console.log(props)
    }
    return(
        <StyleItem {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, 
                    {
                        onSelect: () => handleClick(child.props.value), 
                        displayMode: props.displayMode,
                        ingroup: true
                    })
            })
        }
        </StyleItem>
    )
}

ListItem.Avatar = Avatar
ListItem.Icon = Icon
ListItem.Button=Button
ListItem.Link=Link


ListItem.propTypes = {
    icon: PropTypes.element,
    button: PropTypes.bool
}

export default ListItem