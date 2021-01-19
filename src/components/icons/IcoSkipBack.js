import styled from 'styled-components'
    
const StyledSpan = styled.span`
    margin: ${props => props.left ? "0px 8px 0px 0px" : props => props.right ? "0px 0px 0px 8px" : "0px"};
    svg {
        vertical-align: middle;
    }
`;

const IcoSkipBack= (props) => {
    let color = props.color
    let fill = props.fill
    let size = props.size === 'big' ? 36 : props.size === 'small' ? 16 : 24;
    return (
        <StyledSpan {...props}><svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-back"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg></StyledSpan>
    )
}
IcoSkipBack.defaultProps = {
    color: "currentColor",
    fill: "none",
    size: "normal"
}

export default IcoSkipBack