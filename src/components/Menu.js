import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import useClickOutside from '../hooks/useClickOutside';
import IcoX from '../components/icons/IcoX'

const StyleMenu = styled.nav`
    display:flex;
    flex-direction:column;
    justify-content : center;
    height:100vh;
    text-align:left;
    padding : 2rem;
    position:absolute;
    top:0;
    left:0;
    transition:transform 0.3s ease-in-out;
    background:#fff;
    transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
`;
const MenuItem = styled.a`
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: bold;
    text-decoration: none;
    color: #000;

    &:hover{
        color: red;
    }
`;
const ButtonClose = styled.button`
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