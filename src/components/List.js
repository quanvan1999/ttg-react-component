import React from 'react'
import styled from 'styled-components'

const StyleList = styled.div`
    border-bottom:1px solid #eee;
    display:flex;
    flex-direction:column;
    &:last-child{
        border:0;
    }
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
export default List