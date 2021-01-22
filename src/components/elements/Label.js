import styled from 'styled-components'

const StyledLabel = styled.p`
    margin: 0.25rem 0 0.25rem 0;
    font-size: 1rem;
    font-weight: 400;
`;

const Label = (props) => {
    return (
        <StyledLabel {...props}>
            {props.children}
        </StyledLabel>
    )
}

export default Label