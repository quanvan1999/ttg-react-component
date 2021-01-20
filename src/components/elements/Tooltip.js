import React, { Fragment, cloneElement, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyleToolTip = styled.div`

    position: absolute;
    padding:  5px;
    border-radius:4px;
    background-color: #525050;
    color: #fff;
    font-size:14px;
    max-width:200px;
    opacity: 0;
    transform-origin: center center;
    text-align: center;
    transition: opacity 0.6s;
`;

const TooltipContent = ({ content, position, tooltipPosition }) => {
  const tooltipEl = useRef();
  const targetEl = document.getElementById('root');

  useEffect(() => {
    const el = tooltipEl.current;
    const rect = el.getBoundingClientRect();
    if(el) {

      setTimeout(() => {
        if(tooltipPosition === 'top') {
          el.style.top = `${position.top > rect.height ? position.top - el.clientHeight : position.top}px`;
          el.style.left = `${position.left > rect.width/2 ? position.left : 0}px`;
          el.style.transform = `translate(${position.left > rect.width/2 ? "-50%" : "0"} , ${position.top > rect.height ? "-15px" : "45px"})`;
        }
        else if(tooltipPosition === 'bottom' ) {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left > rect.width ? position.left : 0}px`;
          el.style.transform = `translate(${position.left > rect.width ? "-50%" : "0"} , 15px)`;
        }
        else if(tooltipPosition === 'left') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left > rect.width ? position.left - el.clientWidth : 0}px`;
          el.style.transform = `translate(${position.left > rect.width ? "-15px" : "15px"},${position.left > rect.width ? "-50%" : "50%"})`;
        }
        else if(tooltipPosition === 'right') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left}px`;
          el.style.transform = `translate(15px,-50%)`;
        }
        el.style.opacity = '1';
      }, 20);
    }
    // eslint-disable-next-line
  }, []);

  const output = <StyleToolTip
                      ref={tooltipEl}>{content}
                </StyleToolTip>

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

    if(position === 'top') {
      setElPosition({ top: pos.top + window.pageYOffset, left: pos.left + (pos.width / 2) + window.pageXOffset });
    }
    else if(position === 'bottom') {
      setElPosition({ top: pos.bottom + window.pageYOffset, left: pos.left + (pos.width / 2) + window.pageXOffset });
    }
    else if(position === 'left') {
      setElPosition({ top: pos.top + (pos.height / 2) + window.pageYOffset, left: pos.left + window.pageXOffset });
    }
    else if(position === 'right') {
      setElPosition({ top: pos.top + (pos.height / 2) + window.pageYOffset, left: pos.left + pos.width + window.pageXOffset });
    }

    setShow(true);
  }
  return(
    <Fragment>
      {show && <TooltipContent position={elPosition} content={content} tooltipPosition={position} />}
      {cloneElement(children, {...children.props, onMouseEnter: getPosition, onMouseLeave: () => setShow(false)})}
    </Fragment>
  );
}
Tooltip.defautProps= {
    position: 'bottom',
    content: ""
}
Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.any.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
}

export default Tooltip;