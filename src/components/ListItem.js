import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import RippleButton from "./RippleButton"
import Avatar from "./elements/Avatar"
import Icon from "./elements/Icon";
import Button from "./elements/Button"
import Link from "./elements/Link";
import { Checkbox, Toggle } from './elements'

const StyleItem = styled.li`

    display:flex;
    margin: 0;
    padding: 15px 10px;
    color:;
    background:transparent;
    align-items:center;
    position:relative;
    &:hover{
        transition:all 0.6s;
        background:${props => props.theme.color.border.primary};
        opacity:1;
    }
    & button:last-child, label:last-child{
        position:absolute;
        right:5px;
    }
    & p , a{
        line-height:1.2;
        color: ${props => props.theme.color.text.primary};
        margin: 0 10px 0 12px;
        max-width:150px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
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