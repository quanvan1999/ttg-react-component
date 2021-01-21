import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import RippleButton from "./RippleButton"
import Avatar from "./elements/Avatar"
import Icon from "./elements/Icon";
import Button from "./elements/Button"
import Link from "./elements/Link";
const StyleItem = styled.li`
    display:flex;
    margin:5px 0;
    padding: 5px 10px;
    color:#000;
    background:transparent;
    align-items:center;
    justify-content:space-between;
    &>p ,>button,>span,>div {
        margin-right:15px;
    }    
    &>p:last-child ,>button:last-child,>span:last-child,>div:last-child {
        margin-right:0;
    } 
`;
const Text= styled.p``;


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
ListItem.Text=Text


ListItem.propTypes = {
    icon: PropTypes.element,
    button: PropTypes.bool
}

export default ListItem