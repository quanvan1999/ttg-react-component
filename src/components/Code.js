import React from 'react'
import styled from 'styled-components'

const StyledCode = styled.code`
    font-family: Consolas;
    display: flex;
    align-items: center;
    text-align: center;
    background-color: transparent;
    border: 1px solid #A3A3A3;
    border-radius: 8px;
    padding: 0 8px;
`;

const Code = ({children}) => {
    return (
        <StyledCode>
            {children}
        </StyledCode>
    )
}
export default Code
