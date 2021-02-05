import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const StyledCol = styled.div`
    flex: 1 0 0;
    min-height: 30px;
    border: 1px solid #EEE;
    ${props => props.span && css`
        flex: 0 0 auto;
        width: calc(100%/12*${props.span});
    `}
    ${props => props.auto && css`
        flex: 0 0 auto;
        width: auto;
    `}
`;
const Col = (props) => <StyledCol {...props}>{props.children}</StyledCol>

Col.propTypes = {
    span: PropTypes.number,
    auto: PropTypes.bool
}

export default Col