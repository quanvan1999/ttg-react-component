import React from 'react'
import styled from 'styled-components'

const StyledCode = styled.code`
    font-family: Consolas;
    background-color: transparent;
`;

const Code = ({children}) => {
    return (
        <StyledCode>
            {children}
        </StyledCode>
    )
}
export default Code
