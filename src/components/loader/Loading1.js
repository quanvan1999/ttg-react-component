import styled from 'styled-components'

const DivParent = styled.div`
    width: ${props => props.width ? props.width : '210px'};
    margin: auto;
    display: flex;
`;
const DivLoading = styled.div`
    border: .5rem solid #f3f3f3;
    border-top: .5rem solid ${props => props.ColorBorder ? props.ColorBorder : 'purple'};
    border-radius: 50%;
    width: ${props => props.width ? props.width : '5rem'};
    height: ${props => props.height ? props.height : '5rem'};
    animation: spin 3s linear infinite;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
`;
const Loading1 = (props)=>{
    return(
        <DivParent {...props}>
            {props.children}
        </DivParent>
    )
}
Loading1.Circle = DivLoading

export default Loading1