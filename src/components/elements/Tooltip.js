import React, { Fragment, cloneElement, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyleToolTip = styled.div`
    position: absolute;
    padding:  5px;
    border-radius:4px;
    background-color: ${props => props.theme.color.background.secondary};
    color: ${props => props.theme.color.text.primary};
    font-size: ${props => props.theme.textSize.small};
    max-width: ${props => props.maxWidth+"px"};
    opacity: 0;
    transform-origin: center center;
    text-align: center;
    transition: opacity 0.6s;
    z-index: 999;
    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      background: black; //${props => props.theme.color.background.secondary};;
      
      transform: rotate(45deg) translate(-50%, -50%);
      left: 50%;
      top: 10%;
    }

`;

const TooltipContent = ({ content, position, tooltipPosition }) => {
  const tooltipEl = useRef();
  const targetEl = document.getElementById('root');
  const maxWidth = useRef(position.width)

  useEffect(() => {
    const el = tooltipEl.current;
    const rect = el.getBoundingClientRect();
    if(el) {
      setTimeout(() => {
        if(tooltipPosition === 'top') {
          el.style.top = `${position.top > rect.height + 8 ? position.top - rect.height : position.top + rect.height}px`;
          el.style.left = `${position.left + position.width/2}px`;
          el.style.transform = `translate(-50% , ${position.top > rect.height + 8 ? "-8px" : "0%"})`;
        }
        else if(tooltipPosition === 'bottom' ) {
          let winHeight = window.innerHeight
          let scrollY = window.scrollY
  
          el.style.top = `${(scrollY + winHeight - position.top - position.height) > rect.height + 8 ? position.top + position.height + 8: position.top - rect.height - 8}px`;
          el.style.left = `${position.left + position.width/2}px`;
          el.style.transform = `translateX(-50%)`;
        }
        el.style.opacity = '1';
      }, 300);
    }
    // eslint-disable-next-line
  }, []);

  const output = <StyleToolTip ref={tooltipEl} maxWidth={maxWidth.current} pos={tooltipPosition}>{content}</StyleToolTip>

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

  const getPosition = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();
    setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + window.pageXOffset, width: pos.width, height: pos.height});
    setShow(true);
  }
  return(
    <Fragment>
      {show && <TooltipContent position={elPosition} content={content} tooltipPosition={position} />}
      {cloneElement(children, {...children.props, onMouseEnter: getPosition, onMouseLeave: () => setShow(false)})}
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
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
}

export default Tooltip;