import React, {useEffect, useRef,useState} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyleDropDownMenu= styled.div`
    position:relative;
`;
const StyleButton = styled.button`
    background: ${props => props.theme.color.fill.primary};
    color: ${props => props.theme.color.background.primary};
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
    &:focus{
        outline: none;
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
    display:block;
    padding: 5px 0;
`
const Item = styled.li`
    border-bottom: 1px solid ${props => props.theme.color.border.primary};
    display:block;
    &:last-child{
        border:none;
    }

`;
const LinkItem = styled.a`
    text-decoration: none;
    color: ${props => props.theme.color.text.primary};
    padding: 10px 20px;
    display: block;
    :hover{
        color: ${props => props.theme.color.background.primary};
        background :${props => props.theme.color.fill.primary};
    }
`
const NavMenu = styled.nav`
    display:block;
    background: ${props => props.theme.color.background.primary};
    border-radius: 4px;
    position:absolute;
    z-index: 1;
    top: 30px;
    left:0;
    min-width: 150px;
    max-width:300px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: opacity 0.4s ease;
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
            <NavMenu ref={dropdownRef} className={`menu ${isActive ? 'active' : ''}`}>
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

DropdownMenu.defaultProps ={
    name: '',
    label: 'default'
}

DropdownMenu.propTypes ={
    name: PropTypes.string,
    label: PropTypes.string
}
export default DropdownMenu