import React, { useState } from "react"
import  PropTypes from "prop-types"
import styled from "styled-components"
import {getDarker, getLighter} from '../utils/color'

const AccordionWrapper = styled.div`
    width: ${props => props.width}px;
    min-width: 300px;
`;
const AccordionList = styled.div`
    padding: 0px 0px 0px 20px;
`;
const AccordionTitle = styled.div`
    cursor: pointer;
    color ${props => props.theme.color.text.primary};
    padding: 7px 10px;
    border: 1px solid ${props =>  props.theme.color.border.primary};
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
        color: ${props => getLighter(props.theme.color.text.primary)};
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
    padding: 0 10px;
    margin-top:5px;
    &.collapsed {
        max-height: 0;
        min-height:0;
        transition:max-height 0.3s ease-out;

    }
`;
const Accordion = (props) =>{
    const [open,setOpen] = useState(false)
    return(
        <AccordionWrapper {...props}>
            <AccordionTitle className={`accordion-title ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>{props.label}</AccordionTitle>
                <AccordionList>
                    <AccordionItem className={`accordion-item ${!open ? 'collapsed' : ''}`}>
                        {props.children}
                    </AccordionItem>
                </AccordionList>
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
