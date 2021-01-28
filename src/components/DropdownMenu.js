import React, {useEffect, useRef,useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
    
const StyleDropDownMenu= styled.div`
    position:relative;
`;
const StyleButton = styled.button`
    background: #ffffff;
    border-radius: 90px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 6px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border: none;
    vertical-align: middle;
    transition: box-shadow 0.4s ease;

    &:hover {
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
      }
      
    & span {
        font-weight: 700;
        vertical-align: middle;
        font-size: 14px;
        margin: 0 10px;
      }
      
`
const ContainerMenu = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
`
const Item = styled.li`
    border-bottom: 1px solid #eee;
    
    &:last-child{
        border:none;
    }
`;
const LinkItem = styled.a`
    text-decoration: none;
    color: #333333;
    padding: 15px 20px;
    display: block;
`
const NavMenu = styled.nav`
    background: #fff;
    border-radius: 4px;
    position:absolute;
    top: 30px;
    left:0;
    min-width: 150px;
    max-width:300px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease, transform 0.4 ease, visibility 0.4s;

    &.active{
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;
const DropdownMenu = (props) =>{

    const dropdownRef = useRef(null);
    const [isActive,setIsActive] = useState(false)
    useEffect(() =>{
        const pageClickEvent= (e) =>{
            if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)){
                setIsActive(!isActive)
            }
        }

        if(isActive) {
            window.addEventListener('click', pageClickEvent)
        }
        return() => {
            window.removeEventListener('click', pageClickEvent)
        }
    },[isActive])

    return(
        <StyleDropDownMenu>
            <StyleButton onClick={() => setIsActive(!isActive)}>
                <span>{props.label}</span>
            </StyleButton>
            <NavMenu ref={dropdownRef} className={`menu ${isActive ? 'active' : null}`}>
                <ContainerMenu>
                {
                    React.Children.map(props.children, child => {
                        return React.cloneElement(
                            child, {
                                name: props.name || (new Date()).getTime().toString(), 
                                displayMode: props.displayMode
                            })
                    })
                }
                </ContainerMenu>
            </NavMenu>
        </StyleDropDownMenu>

    )
}
DropdownMenu.LinkItem=LinkItem
DropdownMenu.Item = Item
export default DropdownMenu