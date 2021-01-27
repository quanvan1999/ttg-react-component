import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import useClickOutside from '../hooks/useClickOutside';
import IcoX from '../components/icons/IcoX'
import {getDarker, getLighter} from '../utils/color'


const StyleMenu = styled.nav`
--textColor: ${props => props.theme.color.background.primary};
--fillColor: ${props => props.theme.color.fill[props.color] || props.theme.color.fill.primary};

    display:flex;
    flex-direction:column;
    height:100%;
    box-shadow: 2px 0 5px rgba(0,0,0,0.5);
    text-align:left;
    position:fixed;
    top:0;
    left:0;
    z-index: 1;
    transition:transform 0.3s ease-in-out;
    background: ${props => props.theme.color.fill.primary};
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
    & svg{
        color: ${props => props.theme.color.background.primary};
    }

    @media (max-width: 768px){
        position: fixed;
        bottom: 0;
        left:0;
        transform: translateX(0);
        top:inherit;
        height: auto;
        flex-direction: row;
        width:100%;
        padding: 0;
        justify-content : center;
        align-items:center;
        & a{
            flex: 1;
            text-align:center;
            font-size: 1rem;
            padding: 10px;
            justify-content:center;
        }
    }
`;
const MenuItem = styled.a`
    font-size: 1rem;
    padding: 10px;
    font-weight: bold;
    text-decoration: none;
    flex-direction: column;
    color: ${props => props.theme.color.background.primary};
    display:flex;
    align-items:center;
    &:hover{
        background:${props => getLighter(props.theme.color.fill[props.color] || props.theme.color.fill.primary)};
    }
    & span{
        margin-right:5px;
    }
`;
const ButtonClose = styled.button`
    display: ${props => props.open ? 'block' : 'none'};
    background:transparent;
    border:none;
    position:absolute;
    top:5px;
    right:5px;
    cursor:pointer;
    & svg{
        color: #000;
        width: 2rem;
        height: 2rem;
    }
    
    &:focus{
        outline:none;
    }
    @media (max-width: 768px){
        display:none;
    }
`;
const Menu = (props) =>{
    
    const closePopup = () => props.setOpen(false)
    let ref = useClickOutside(closePopup)

    return(
        <StyleMenu open={props.open} ref={ref}>
            {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, {
                        name: props.name || (new Date()).getTime().toString(), 
                        displayMode: props.displayMode
                    })
            })
            }
            <ButtonClose onClick={() => props.setOpen(false)}><IcoX/></ButtonClose>
        </StyleMenu>
    )
}
Menu.Item=MenuItem
Menu.propTypes = {
    open:PropTypes.bool.isRequired
  }
export default Menu