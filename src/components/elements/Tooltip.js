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
    opacity: ${props => props.pos.opa};
    transform-origin: center center;
    text-align: center;
    transition: opacity 0.6s;
    top:  ${props => props.pos.top};
    left: ${props => props.pos.left};
    transform: ${props => props.pos.transform};
`;

const TooltipContent = ({ content, position, tooltipPosition }) => {
  const tooltipEl = useRef();
  const ttPosition = useRef({left: 0, top: 0, transform: ""})
  const [pos, setPos] = useState({left: 0, top: 0, transform: ""})
  const targetEl = document.getElementById('root');
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    const el = tooltipEl.current;
    const rect = el.getBoundingClientRect();
    if(el) {
      console.log("Position:")
      console.log(position)
      setTimeout(() => {
        if(tooltipPosition === 'top') {
          el.style.top = position.top > rect.height ? position.top - el.clientHeight : position.top + "px"
          el.style.left = position.left > rect.width/2 ? position.left : 0 + "px"
          el.style.transform = `translate(${position.left > rect.width/2 ? "-50%" : "0"} , ${position.top > rect.height ? "-15px" : "45px"})`;
        }
        else if(tooltipPosition === 'bottom' ) {
          ttPosition.current.top = `${position.top}px`;
          ttPosition.current.left = `${position.left > rect.width ? position.left : 0}px`;
          ttPosition.current.transform = `translate(${position.left > rect.width ? "-50%" : "0"} , 15px)`;
          setPos({
            top: `${position.top}px`,
            left: `${position.left > rect.width ? position.left : 0}px`,
            transform: `translate(${position.left > rect.width ? "-50%" : "0"} , 15px)`,
            opa: 1
          })
          console.log(ttPosition.current)
          setDisplay(true)
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

  return ReactDOM.createPortal(<StyleToolTip ref={tooltipEl} pos={pos}>{content}</StyleToolTip>, targetEl)
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
const Tooltip = ({position, content, children}) => {
  const elePosition = useRef({ top: 0, left: 0 });
  const tooltipRef = useRef()
  const [show, setShow] = useState(false);
  const ttPosition = useRef({left: 0, top: 0, transform: ""})
  const getPosition = (e) => {
    const pos = e.currentTarget.getBoundingClientRect();
    console.log(pos)
    if(position === 'top') {
      elePosition.current = { top: pos.top + window.pageYOffset, left: pos.left + (pos.width / 2) + window.pageXOffset }
    }
    else if(position === 'bottom') {
      elePosition.current = { top: pos.bottom + window.pageYOffset, left: pos.left + (pos.width / 2) + window.pageXOffset }
      ttPosition.current.top = `${elePosition.current.top}px`;
      ttPosition.current.left = `${elePosition.current.left > rect.width ? position.left : 0}px`;
      ttPosition.current.transform = `translate(${position.left > rect.width ? "-50%" : "0"} , 15px)`;
    }
    else if(position === 'left') {
      elePosition.current = { top: pos.top + (pos.height / 2) + window.pageYOffset, left: pos.left + window.pageXOffset }
    }
    else if(position === 'right') {
      elePosition.current = { top: pos.top + (pos.height / 2) + window.pageYOffset, left: pos.left + pos.width + window.pageXOffset }
    }
    setShow(true);
  }
  return(
    <Fragment>
      {show && <TooltipContent ref={tooltipRef} position={elePosition.current} content={content} tooltipPosition={position} />}
      {cloneElement(children, {...children.props, onMouseEnter: getPosition, onMouseLeave: () => setShow(false)})}
    </Fragment>
  );
}

Tooltip.propTypes = {
  children: PropTypes.element.isRequired,
  content: PropTypes.any.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
}
Tooltip.defaultProps = {
  position: "bottom",
  content: ""
}
export default Tooltip;