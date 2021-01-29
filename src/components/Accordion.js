import React, { useState } from "react"
import  PropTypes from "prop-types"
import styled from "styled-components"

const AccordionWrapper = styled.div`
    width: ${props => props.width}px;
    min-width: 300px;
`;
const AccordionTitle = styled.div`
    cursor: pointer;
    color #666;
    padding: 7px 10px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after{
        content: "";
        width:0;
        height:0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #666;
    }
    &:hover,
    &.open{
        color: #000;
    }
    &.open::after{
        content: "";
        border-top: 0;
        border-bottom: 5px solid;
    }
`;
const AccordionItem = styled.div`
    overflow: hidden;
    transition:max-height 0.7s ease-in;
    height:auto;
    max-height:600px;
    padding: 5px 0 5px 30px;
    &.collapsed {
        max-height: 0;
        transition:max-height 0.3s ease-out;

    }
`;
const Accordion = (props) =>{
    const [open,setOpen] = useState(false)
    return(
        <AccordionWrapper {...props}>
            <AccordionTitle className={`accordion-title ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>{props.label}</AccordionTitle>
            <AccordionItem className={`accordion-item ${!open ? 'collapsed' : ''}`}>
                {props.children}
            </AccordionItem>
        </AccordionWrapper>    
    )
}
Accordion.defaultProps = {
    label: "",
    width: 300,
}
Accordion.propTypes ={
    label: PropTypes.string.isRequired,
    width: PropTypes.number
}
export default Accordion
