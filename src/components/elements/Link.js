import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
const StyledLink = styled.a`
    color: ${props => props.theme.color.text.link};
    text-decoration: ${props => props.underline ? "underline" : "none"};
    font-weight: 800;
    &:visited {
        color: #7B237B;
    }
`;
const Link = (props) => {
    return (
        <StyledLink {...props}>{props.children}</StyledLink>
    )
}
Link.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    underline: PropTypes.bool
}

export default Link
