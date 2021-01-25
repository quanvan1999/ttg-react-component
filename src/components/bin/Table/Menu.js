import styled from 'styled-components'
import React from 'react'
const MenuComponent = styled.div`
    float: right;
    margin: 0.5rem 0 0 .5rem;
}
`;

const Item = styled.a`
    color: black;
    padding: 8px 16px;
    -webkit-text-decoration: none;
    text-decoration: none;
    border-right: 1px solid rgba(0,0,0,.05);
    background: rgb(108 98 98 / 5%);
    cursor: pointer;

    &:active{
        color: white;
    }

    &:hover{
        background: #8080804f;
    }
`;

const handleClick = ()=>{
    
}

const Menu = (props)=>{
    return(
        <MenuComponent {...props}>
        {
            React.Children.map(props.children, child => {
                return React.cloneElement(
                    child, 
                    {
                        onSelect: () => handleClick(), 
                        displayMode: props.displayMode,
                        ingroup: true
                    })
            })
        }
        </MenuComponent>
    )
}

Menu.Item = Item

export default Menu