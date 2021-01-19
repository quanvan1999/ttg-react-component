import { useState } from 'react';
import styled from 'styled-components'
const Accordion = styled.div`
    margin-top: 10px;
`;

const ButtonAccordion = styled.button`
    padding:  8px 20px 8px 20px;
    color: black;
    font-weight: 500;
    cursor: pointer;
    border: none;
    background-color: ${props => props.background ? "" : "rgb(165,156,135)"};

    &:hover{
        background-color: rgba( 165, 156, 135, 0.75 );
        color: white;
    }

    &:focus{
        border: none;
    }
`;

const ContentAccordion = styled.p`
    background-color: ${props => props.background ? "#cacbcd" : "rgb(141 138 133)"};
    transition: ${props => (props.display === "true") ? "0.4s" : "0s"};
    padding: 10px;
    opacity: ${props => (props.display === "true") ? "1" : "0"};
    display: ${props => (props.display === "true") ? "block" : "inline"};
`;

const AccordionComponent = (props) =>{
    const [_isDisplay, setIsdisplay] = useState(1);
    const [display, setDisplay] = useState(false);
    const handleClick = () =>{
        if(_isDisplay % 2 === 0){
            setDisplay(false);
            setIsdisplay(1)
        }
        else{
            setDisplay(true);
            setIsdisplay(0)
        }
        // console.log(display, _isDisplay)
    }
    
    return (
        <Accordion>
            <ButtonAccordion onClick={()=>handleClick()} background={props.background}>{props.title}</ButtonAccordion>
            <ContentAccordion display={(display) ? "true" : "flase"} background = {props.background}>
                {props.text}
            </ContentAccordion>
        </Accordion>
    )
}

export default AccordionComponent