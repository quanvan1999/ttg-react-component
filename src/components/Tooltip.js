import { useState,useEffect } from "react"
import  styled  from 'styled-components'
import PropTypes  from 'prop-types';

const ToolTipWrapper = styled.div`
    display:inline-block;
    position:relative;

    & .top {
        top: -40px;
      }
    & .left{
        left:-50%;
        top: 4px;
    }
    & .right{
        left: 150%;
        top:4px;
    }
`;
const ToolTipDirection = styled.div`
    position: absolute;
    border-radius: 4px;
    top:40px;
    left: 50%;
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
        <ToolTipWrapper className="Tooltip-wrapper"
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
         {props.children}
         {active && (
             <ToolTipDirection className={`tooltip-tip ${props.direction || "bottom"}`}>
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