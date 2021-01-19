import styled from 'styled-components'
    
const StyledSpan = styled.span`
    margin: ${props => props.left ? "0px 8px 0px 0px" : props => props.right ? "0px 0px 0px 8px" : "0px"};
    svg {
        vertical-align: middle;
    }
`;

const IcoCornerRightDown= (props) => {
    let color = props.color
    let fill = props.fill
    let size = props.size === 'big' ? 36 : props.size === 'small' ? 16 : 24;
    return (
        <StyledSpan {...props}><svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-right-down"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg></StyledSpan>
    )
}
IcoCornerRightDown.defaultProps = {
    color: "currentColor",
    fill: "none",
    size: "normal"
}

export default IcoCornerRightDown