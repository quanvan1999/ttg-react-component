import React,{useState,useEffect} from 'react'
import  styled, { keyframes }  from 'styled-components';
const RippleButton = (props) =>{
    const [coords,setCoords] = useState({x:-1,y:-1})
    const [isRipple,setIsRipple] = useState(false)
    const ripple = keyframes`
    0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(10);
        opacity: 0.375;
      }
      100% {
        transform: scale(35);
        opacity: 0;
      }
    `;

    const StyleButton = styled.button`
        border: none;
        color: #fff;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        display:flex;
        margin:0;
        padding: 5px 10px;
        color:#000;
        background:transparent;
        &:hover{
            background: ${props => props.theme.color.fill.primary};
            color: ${props => props.theme.color.background.primary};
        }
        & > .ripple {
            width: 20px;
            height: 20px;
            position: absolute;
            background: ${props => props.theme.color.background.primary};
            display: block;
            content: "";
            border-radius: 50%;
            opacity: 1;
            animation: 1s ease 1 forwards ${ripple};
          }
    `;
    useEffect(() =>{
        if(coords.x !== -1 && coords.y !== -1){
            setIsRipple(true)
            setTimeout(() => setIsRipple(false),300)
        }else
        {
            setIsRipple(false)
        }
    
    },[coords])

    useEffect(() =>{
        if(!isRipple) setCoords({x:-1,y:-1})
    },[isRipple])

    return(
        <StyleButton className="ripple-button"
                onClick={e => {
                    const rect = e.target.getBoundingClientRect();
                    setCoords({ x: e.clientX - rect.left,y: e.clientY - rect.top})
                    props.onClick && props.onClick(e)
                }}
        >
            {isRipple ? (
                <span className="ripple"
                style={{
                    left:coords.x,
                    top:coords.y
                }}
                />
            ) : (
                ''
            )}
            {props.children}
        </StyleButton>
    )
}
export default RippleButton