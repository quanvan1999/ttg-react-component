import styled from 'styled-components'

const DivParent = styled.div`
    display: flex;
    height: 20vh;
    justify-content: center;
    align-items: center;
    background: #222;
    
`;

const Dot = styled.div`
    position: relative;
    width: ${props => props.width ? props.width : '1em'};
    height: ${props => props.height ? props.height : '1em'};
    margin: 0.8em;
    border-radius: 50%;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: wheat;
        border-radius: inherit;
        animation: wave 2s ease-out infinite;
    }
    @keyframes wave {
        50%,
        75% {
          transform: scale(2.5);
        }
      
        80%,
        100% {
          opacity: 0;
        }
      }
`;

const Loading2 = (props)=>{
    return(
        <DivParent {...props}>
            {props.children}
        </DivParent>
    )
}
Loading2.Dot = Dot

export default Loading2