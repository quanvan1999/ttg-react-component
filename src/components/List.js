import React from 'react'
import styled from 'styled-components'

const StyleList = styled.ul`
    border-bottom:2px solid ${props => props.theme.color.border.primary};
    display:flex;
    padding-bottom:5px;
    flex-direction:column;
    &:last-child{
        border:0;
        padding:0;
    }
    width:${props => props.width}px;
    max-width:400px;
    min-width:200px;
`;

const List = (props) => {


    return(
        <StyleList {...props}>
        {
           props.children
        }
        </StyleList>
    )
}
List.defaultProps={
    width: 300,
}
export default List