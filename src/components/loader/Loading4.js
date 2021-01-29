import styled from 'styled-components'

const Wrapper = styled.div`
    padding:0;
    margin:0;
    background:radial-gradient(#9b59b6, #8e44ad);
    width:200px;
    height:100px;
    position: absolute;
    left:50%;
    margin-top: 50px;
    transform: translate(-50%, -50%);
    div:nth-child(2){
        left:45%;
        animation-delay: .2s;
    }
    div:nth-child(3){
        left:auto;
        right:15%;
        animation-delay: .3s;
    }
    div:nth-child(4){
        left: 45%;
        animation-delay: .2s
    }
    div:nth-child(5){
        left:auto;
        right:15%;
        animation-delay: .3s;
    }
`;
const Circle = styled.div`
    width:20px;
    height:20px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    left:15%;
    transform-origin: 50%;
    animation: circle .5s alternate infinite ease;
    @keyframes circle{
        0%{
            top:60px;
            height:5px;
            border-radius: 50px 50px 25px 25px;
            transform: scaleX(1.7);
        }
        40%{
            height:20px;
            border-radius: 50%;
            transform: scaleX(1);
        }
        100%{
            top:0%;
        }
    }
`;
const Shadow = styled.div`
    width:20px;
    height:4px;
    border-radius: 50%;
    background-color: ${props => props.background ? props.background : 'rgba(0,0,0,.5)'};
    position: absolute;
    top:62px;
    transform-origin: 50%;
    z-index: -1;
    left:15%;
    filter: blur(1px);
    animation: shadow .5s alternate infinite ease;
    @keyframes shadow{
        0%{
            transform: scaleX(1.5);
        }
        40%{
            transform: scaleX(1);
            opacity: .7;
        }
        100%{
            transform: scaleX(.2);
            opacity: .4;
        }
    }
`;
const Span = styled.span`
    position: absolute;
    top: 75px;
    font-family: 'Lato';
    font-size: 20px;
    letter-spacing: 12px;
    color: ${props => props.color ? props.color : '#fff'};
    left:15%;
`;
const Loading4 = (props)=>{
    return(
        <Wrapper {...props}>
            <Circle/>
            <Circle/>
            <Circle/>
            <Shadow/>
            <Shadow/>
            <Shadow/>
            <Span>Loading</Span>
        </Wrapper>
    )
}

export default Loading4