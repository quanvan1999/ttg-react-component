import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import RippleButton from "./RippleButton"
import Avatar from "./elements/Avatar"
import Icon from "./elements/Icon";
import Button from "./elements/Button"
import Link from "./elements/Link";
import { Checkbox, Toggle } from './elements'
const ripple = keyframes`
`;
const StyleItem = styled.li`
    display:flex;
    margin:5px 0;
    padding: 15px;
    color:#000;
    background:transparent;
    align-items:center;
    position:relative;
    &:hover::before{
        opacity: 1;
        transform: scale(1, 1);
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        background-color: rgb(200 194 194 / 26%);
        transition: all 0.5s;
        transform: scale(0.5, 1);
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