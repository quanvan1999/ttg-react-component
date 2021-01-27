import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    background: ${props => props.theme.color.background.primary};
    color: ${props => props.theme.color.text.primary};
    display: ${props => props.fullWidth ? "block" : "inline-block"};
    padding: 8px;
    border: 1px solid ${props => props.theme.color.border.primary};
    border-radius: 8px;
    margin: 8px;
    transition: background 0.2s linear;
    & h3 {
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    
    &:before{
        z-index: ${props => props.open ? '1' : -1};
        content: "";
        background: ${props => props.open ? '#00000021' : null};
        width:100%;
        top:0;
        left:0;
        height:100%;
        position:fixed;
    }
`;

const Container = (props) => {
    return (
        <StyledContainer {...props}>
            {props.headline && <h3>{props.headline}</h3>}
            {props.children}
        </StyledContainer>
    )
}

export default Container
