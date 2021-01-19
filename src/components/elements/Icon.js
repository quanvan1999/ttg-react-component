import styled from 'styled-components'
import React from 'react'
const StyledSpan = styled.span`
    margin: ${props => props.left ? "0px 8px 0px 0px" : props => props.right ? "0px 0px 0px 8px" : "0px"};
    svg {
        vertical-align: middle;
    }
`;

const Icon = (props) => {
    let size = props.size === 'big' ? 36 : props.size === 'small' ? 16 : 24;
    return (
        <StyledSpan {...props}>
            {React.cloneElement(props.children, {width: size, height: size})}
        </StyledSpan>
    )
}
Icon.defaultProps = {
    color: "currentColor",
    fill: "none",
    size: "normal"
}

export default Icon