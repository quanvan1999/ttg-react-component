import styled from 'styled-components'
import propsTypes from 'prop-types'
const Div = styled.div`
    display: flex;
    width: 100vw;
    height: 20vh;
    background: black;
    align-items: center;
    justify-content: center;
    text-align: center;
    p{
        display: inline-block;
        text-transform: uppercase;
        text-align: center;
        font-size: ${props => props.size ? props.size : '4em'};
        font-family: arial;
        font-weight: 600;
        transform: scale(.5);
        color: ${props => props.color ? props.color : '#121212'};
        -webkit-text-stroke: 2px gray;
    }
    p:nth-child(1) {
    animation: hover 1s linear infinite;;
    }
    
    p:nth-child(2) {
    animation: hover 1s linear infinite .125s;
    }
    
    p:nth-child(3) {
    animation: hover 1s linear infinite .25s;
    }
    
    p:nth-child(4) {
    animation: hover 1s linear infinite .375s;
    }
    
    p:nth-child(5) {
    animation: hover 1s linear infinite .5s;
    }
    
    p:nth-child(6) {
    animation: hover 1s linear infinite .625s;
    }
    
    p:nth-child(7) {
    animation: hover 1s linear infinite .75s;
    }

    @keyframes hover {
        0% {
            transform: scale(.5);
            color: #121212;
            -webkit-text-stroke: 2px gray;
        }
        20% {
            transform: scale(1);
            color: pink;
            -webkit-text-stroke: 3px red;
            filter: drop-shadow(0 0 1px black)drop-shadow(0 0 1px black)drop-shadow(0 0 3px red)drop-shadow(0 0 5px red)hue-rotate(10turn);
        }

        50% {
            transform: scale(.5);
            color: #121212;
            -webkit-text-stroke: 2px gray;
        }
    }
`;
Div.defaultProps={
    size: '4em',
    color: '#121212'
}
Div.propsTypes={
    size: propsTypes.string,
    color: propsTypes.string
}
const Loading3 = (props)=>{
    return(
        <Div {...props}>
            <p>l</p>
            <p>o</p>
            <p>a</p>
            <p>d</p>
            <p>i</p>
            <p>n</p>
            <p>g</p>
        </Div>
    )
}

export default Loading3