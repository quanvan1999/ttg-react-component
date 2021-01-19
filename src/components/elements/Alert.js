import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {Icon} from '../elements/'
import PropTypes from 'prop-types'

const AlertStyle = styled.div`
    --textColor: ${props => props.theme.color.background.primary};
    --fillColor: ${props => props.theme.color.fill[props.color] || props.theme.color.fill.primary};
    background-color: ${props=>props.type === "contained" ? "var(--fillColor)" : "transparent"};
    border-color: "var(--fillColor)";
    border-style: solid;
    border-width: ${props => props.type === "outline" ? "1px" : "0px"};
    color: ${props => props.type === "contained" ? "var(--textColor)" : "var(--fillColor)"};
    display: flex;
    padding: 0.5rem 1rem;
    margin: ${props => props.demo ? "8px" : "0px"};
    border-radius: 4px;
    justify-content: flex-start;
    align-items: center;
`;
const AlertMsg = styled.div`
    padding: 0.25rem;
    margin: 0px 12px;
`;
const Action = styled.div`
    margin-left: auto;
    cursor:pointer;
`;
const Title = styled.div`
    font-weight: ${props => props.theme.weight.bold};
    font-size: ${props => props.theme.textSize.large};
`;
const DefaultIcon = ({color}) => {
    const svg = 
        color === "info" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>:
        color === "warning" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> :
        color === "danger" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> :
        color === "success" ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> :
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
    return <Icon>{svg}</Icon>
}
const Alert = (props) =>{
    return (
        <AlertStyle {...props}>
            {props.icon ? <Icon style={{"margin-right": "12px"}}>{props.icon}</Icon> : <DefaultIcon color={props.color}/>}
            <AlertMsg>
                {props.children}
            </AlertMsg>
            <Action>
                {props.action}
            </Action>       
        </AlertStyle>
    );
}
Alert.Title = Title
Alert.propTypes={
    icon: PropTypes.element,
    color:PropTypes.string,
    type: PropTypes.oneOf(["contained", "outline"]),
    action: PropTypes.element
}
Alert.defaultProps={
    color: "primary",
    type: "contained"
}
export default Alert