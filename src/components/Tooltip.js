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
    ${props =>props.direction === "bottom" && 'left: 0;'}
    left: ${props => props.middle ? '50%' : '0'};
    transform: ${props =>props.middle ? 'translateX(-50%)' : 'translateX(0)'};

    ${props =>props.direction === "top" && 'top: -35px;'}
    ${props =>props.direction === "top" && 'left: 0;'}
    border-radius: 4px;
    padding: 6px;
    color: #fff;
    background: #363636c2;
    font-size: 10px;
    line-height: 1;
    z-index: 100;
    width: ${props => props.maxWidth ? props.maxWidth+'px' : '300px'};
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
        maxWidth: 300,
        middle: false
    }
    Tooltip.propTypes = {
        direction: PropTypes.string,
        content : PropTypes.string,
        maxWidth: PropTypes.number,
        middle: PropTypes.bool
    }
export default Tooltip