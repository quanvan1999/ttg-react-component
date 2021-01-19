import React from 'react'
import styled from 'styled-components'

const StyleList = styled.div`
    padding: 0 8px;
    border-bottom:1px solid #eee;
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