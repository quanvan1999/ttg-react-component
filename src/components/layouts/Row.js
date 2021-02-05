import styled from 'styled-components'

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justifyContent || "flex-start"};
    align-items: ${props => props.alignItems || "flex-start"};

    div{
        ${props => props.auto ? 'width: auto' : ''};
    }
`;

export default Row