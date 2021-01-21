import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import RippleButton from "./RippleButton"
import Avatar from "./elements/Avatar"
import Icon from "./elements/Icon";
import Button from "./elements/Button"
import Link from "./elements/Link";
import { Checkbox, Toggle } from './elements'
const pulse = keyframes` 
    0% {
      transform: scale(1);
    }
    70% {
      transform: scale(.9);
    }
      100% {
      transform: scale(1);
    }
  `;
const StyleItem = styled.li`
    display:flex;
    margin:5px 0;
    padding: 15px;
    color:#000;
    background:transparent;
    align-items:center;
    position:relative;
    &:hover{
        transition:all 0.6s;
        background:#eee;
        opacity:1;
    }
    & button:last-child, label:last-child{
        position:absolute;
        right:5px;
    }
    & p , a{
        margin: 0 10px;
        max-width:150px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
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
ListItem.Checkbox=Checkbox
ListItem.Toggle=Toggle
ListItem.Link=Link
ListItem.Text=Text


ListItem.propTypes = {
    icon: PropTypes.element,
    button: PropTypes.bool
}

export default ListItem