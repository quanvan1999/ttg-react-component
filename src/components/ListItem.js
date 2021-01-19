import React from 'react'
import styled from 'styled-components'
import {Icon} from './elements/'
import Button from '../components/elements/Button'

const StyListItem  = styled.div`
    padding: 12px 6px;
    background:transparent;
    border: 0;
    cursor:pointer;
    display:flex;
    margin: 0;
    &:hover{
        background:#ccc;
    }
`;
const StyListName = styled.div`
    display:block;
    font-size:1rem;
    cursor:pointer;
`;
const ListItem = (props) => {


    return(
       <StyListItem {...props} >
            {props.icon ? <Icon style={{"margin-right": "12px"}}>{props.icon}</Icon> : null }
           <StyListName>{props.children}</StyListName>
       </StyListItem> 
    )
}
export default ListItem