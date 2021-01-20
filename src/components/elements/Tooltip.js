import React, { Fragment, cloneElement, useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyleToolTip = styled.div`
position:absolute;
top:0;

& .tooltip{
    position: absolute;
    padding:  5px;
    border-radius:4px;
    background-color: #525050;
    color: #fff;
<<<<<<< HEAD
    font-size:14px;
    min-width: 80px;
=======
    font-size:10px;
    min-width: 100px;
>>>>>>> 086af82eda8a1d46687b56f68f341614140abb2f
    opacity: 0;
    transform-origin: center center;
    text-align: center;
    transition: 0.7s all;
}
& .tooltip--top{
  transform: translate(-50%,-15px);
}
& .tooltip--bottom{
  transform: translate(-50%,15px);
}
& .tooltip--left{
  transform: translate(-15px,-50%);
}
& .tooltip--right{
  transform: translate(15px,-50%);
}

`;

const TooltipContent = ({ tooltipClass, content, position, tooltipPosition }) => {
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
          el.style.transform = `translate(${position.left > rect.width/2 ? "-50%" : "0"} , ${position.top > rect.height ? "-15px" : "30px"})`;
        }
        else if(tooltipPosition === 'bottom' ) {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left > rect.width ? position.left : 0}px`;
          el.style.transform = `translate(${position.left > rect.width ? "-50%" : "0"} , 15px)`;
        }
        else if(tooltipPosition === 'left') {
          el.style.top = `${position.top}px`;
          el.style.left = `${position.left > rect.width ? position.left - el.clientWidth : 0}px`;
          el.style.transform = `translate(${position.left > rect.width ? "-15px" : "0"},-50%)`;
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

  const output = <StyleToolTip>
                    <div className={tooltipClass} ref={tooltipEl}>{content}
                    </div>
                </StyleToolTip>

  return targetEl ? ReactDOM.createPortal(output, targetEl) : output;
}

TooltipContent.propTypes = {
  content: PropTypes.any.isRequired,
  tooltipClass: PropTypes.string.isRequired,
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
  let tooltipClass = 'tooltip';

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

  if(position === 'top') {
    tooltipClass += ' tooltip--top';
  }
  else if(position === 'bottom') {
    tooltipClass += ' tooltip--bottom';
  }
  else if(position === 'left') {
    tooltipClass += ' tooltip--left';
  }
  else if(position === 'right') {
    tooltipClass += ' tooltip--right';
  }

  return(
    <Fragment>
      {show && <TooltipContent tooltipClass={tooltipClass} position={elPosition} content={content} tooltipPosition={position} />}
      {cloneElement(children, {...children.props, onMouseOver: getPosition, onMouseLeave: () => setShow(false)})}
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