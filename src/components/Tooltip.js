import { useState,useEffect } from "react"
import  styled  from 'styled-components'
import PropTypes  from 'prop-types';

const ToolTipWrapper = styled.div`
    display:inline-block;
    position:relative;
`;
const ToolTipDirection = styled.div`
    position: absolute;
    ${props =>props.direction === "bottom" && 'top: 40px;'}
    ${props =>props.direction === "bottom" && 'left: 50%;'}
    ${props =>props.direction === "top" && 'top: -35px;'}
    ${props =>props.direction === "top" && 'left: 50%;'}
    ${props =>props.direction === "left" && 'top: 4px;'}
    ${props =>props.direction === "left" && 'left:-50%;'}
    ${props =>props.direction === "right" && 'top: 4px;'}
    ${props =>props.direction === "right" && 'left: -150%;'}
    border-radius: 4px;
    transform: translateX(-50%);
    padding: 6px;
    color: #fff;
    background: #363636c2;
    font-size: 10px;
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
`;
const Tooltip = (props) =>{

    let timeOut;
    const [active,setActive] = useState(false)

    const showTip = () =>{
        timeOut=setTimeout(() =>{
            setActive(true)
        },props.delay || 400)
    }
    const hideTip = () => {
        clearInterval(timeOut)
        setActive(false)
    }
    
    return(
        <ToolTipWrapper  
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
         {props.children}
         {active && (
             <ToolTipDirection {...props} >
                 {props.content}
             </ToolTipDirection>
         )}   
        </ToolTipWrapper>
    )
}
    Tooltip.defaultProps = {
        direction: "bottom",
        content: "",
    }
    Tooltip.propTypes = {
        direction: PropTypes.string,
        content : PropTypes.string
    }
export default Tooltip