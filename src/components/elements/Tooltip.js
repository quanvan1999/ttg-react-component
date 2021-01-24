import React, { Fragment, cloneElement, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components'

const opa = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;
const opav = keyframes`
  from {opacity: 1;}
  to {opacity: 0;}
`;

const StyleToolTip = styled.div`
    position: absolute;
    padding:  5px;
    border-radius:4px;
    background-color: ${props => props.theme.color.text.secondary};
    color: ${props => props.theme.color.background.primary};
    font-size: ${props => props.theme.textSize.small};
    max-width: ${props => props.maxWidth+"px"};
    animation: ${props => props.out ? opav : opa} 300ms ease-out 0s 1 normal forwards;
    text-align: center;
    transition: opacity 0.6s;
    z-index: 999;
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      top: ${props => props.pos === "top" ? (props.overflow ? "-5px" : "calc(100% - 5px)") : (props.overflow ? "calc(100% - 5px)" : "-5px")};
      background: ${props => props.theme.color.text.secondary};
      transform: rotate(45deg);
      left: calc(50% - 5px);
    }

`;

const TooltipContent = ({ content, position, tooltipPosition, out }) => {
  const tooltipEl = useRef();
  const targetEl = document.getElementById('root');
  const [overflow, setoverflow] = useState(false)
  useEffect(() => {
    const el = tooltipEl.current;
    const rect = el.getBoundingClientRect();
    if(el) {
      setTimeout(() => {
        if(tooltipPosition === 'top') {
          setoverflow(!(position.top > rect.height + 12))
          el.style.top = `${position.top > rect.height + 12 ? position.top - rect.height + window.scrollY - 4: position.top + window.scrollY + position.height + 4}px`;
          el.style.left = `${position.left + position.width/2}px`;
          el.style.transform = `translate(-50% , ${position.top > rect.height + 12 ? "-8px" : "8px"})`;
        }
        else if(tooltipPosition === 'bottom' ) {
          let winHeight = window.innerHeight
          let scrollY = window.scrollY
          setoverflow(!((scrollY + winHeight - position.top - position.height) > rect.height + 12))
          el.style.top = `${(scrollY + winHeight - position.top - position.height) > rect.height + 12 ? position.top + window.scrollY + position.height + 4: position.top + window.scrollY - rect.height - 4}px`;
          el.style.left = `${position.left + position.width/2}px`;
          el.style.transform = `translate(-50%,${(scrollY + winHeight - position.top - position.height) > rect.height + 12 ? "8px" : "-8px"})`;
        }
      }, 200);
    }
    // eslint-disable-next-line
  }, []);

  const output = <StyleToolTip ref={tooltipEl} out={out} maxWidth={position.width} pos={tooltipPosition} overflow={overflow}>{content}</StyleToolTip>

  return targetEl ? ReactDOM.createPortal(output, targetEl) : output;
}

TooltipContent.propTypes = {
  content: PropTypes.any.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired,
  tooltipPosition: PropTypes.string.isRequired,
}

// Tooltip
const Tooltip = ({ children, position, content}) => {
  const [elPosition, setElPosition] = useState({ top: 0, left: 0 });
  const [show, setShow] = useState(false);
  const [aniOut, setAniOut] = useState(false)
  const getPosition = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();
    setElPosition({ top: pos.top, left: pos.left, width: pos.width, height: pos.height});
    setAniOut(false)
    setShow(true);
  }
  const getOut = () => {
    setTimeout(() => {
      setAniOut(true)
      setTimeout(() => {
        setShow(false)
      }, 300)
    }, 200)
  }
  return(
    <Fragment>
      {show && <TooltipContent out={aniOut} position={elPosition} content={content} tooltipPosition={position} />}
      {cloneElement(children, {...children.props, onMouseEnter: getPosition, onMouseLeave: getOut})}
    </Fragment>
  );
}
Tooltip.defaultProps= {
    position: 'bottom',
    content: ""
}
Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.any.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']).isRequired,
}

export default Tooltip;