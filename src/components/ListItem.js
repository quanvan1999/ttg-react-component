import React from 'react'
import styled from 'styled-components'
import {Icon} from './elements/'
import PropTypes from 'prop-types'
import RippleButton from "./RippleButton";

const StyleItem = styled.div`
    display:flex;
    margin:0;
    padding: 5px 10px;
    color:#000;
    background:transparent;
    &:hover{
        background: ${props => props.theme.color.fill.primary};
        color: ${props => props.theme.color.background.primary};
    }
`;
const StyListName = styled.div`
    display:block;
    font-size:1rem;
`;
const ListItem = (props) => {


    return(
       <>
            {
            props.button ? 
           <RippleButton {...props}>
                {props.icon ? <Icon style={{"margin-right": "15px"}}>{props.icon}</Icon> : null }
                <StyListName>{props.children}</StyListName>
           </RippleButton> : 
            <StyleItem {...props}>
              {props.icon ? <Icon style={{"margin-right": "15px"}}>{props.icon}</Icon> : null }
              <StyListName>{props.children}</StyListName>
            </StyleItem> 
            }
            
       </> 
    )
}
ListItem.propTypes = {
    icon: PropTypes.element,
    button: PropTypes.bool
}
export default ListItem