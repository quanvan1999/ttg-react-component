import { useState,useEffect } from "react"
import  styled  from 'styled-components'
import PropTypes  from 'prop-types';

const ToolTipWrapper = styled.div`
    position:relative;
    display: block;
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
    color: ${props => props.theme.color.text.secondary};
    background: ${props => props.theme.color.background.secondary};
    font-size: ${props => props.theme.textSize.small};
    z-index: 100;
    max-width: 240px;
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
        <ToolTipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
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
        position: "bottom",
    }
    Tooltip.propTypes = {
        position: PropTypes.string,
        content : PropTypes.string,
        maxWidth: PropTypes.number,
    }
export default Tooltip