import React,{  } from "react";
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {getLighter, getDarker} from '../../utils/color'

const BreadcrumbContainer = styled.ul`
    display:flex;
    list-style:none;
    align-items:center;
`;
const StyledBreadcrumbSeparator = styled.label`
    color: ${props => props.theme.color.fill.primary}; 
    margin: auto 5px;
    font-size: ${props => props.theme.textSize.small};
`;
const StyledBreadcrumbItem = styled.li`
    & a{
        text-decoration:none;
        font-size:${props => props.theme.textSize.medium};
        color: ${props => props.theme.color.fill.primary}; 
    }
    &:last-child a{
        color: ${props => props.theme.color.fill.primary}; 
        font-weight: 700;
    }
    & a:hover{
        color: ${props => getLighter(props.theme.color.fill.primary, 30)};
    }
    & a:active{
        color: ${props => getDarker(props.theme.color.fill.primary)};;
    }
`;
const Breadcrumb = (props) => (
    <BreadcrumbContainer name={props.name}>
        {/* Render "not last" item along with the separator*/}
        {props.children.slice(0, -1).map(child => { 
            return(
                <>
                    <StyledBreadcrumbItem key={child.children}>{child}</StyledBreadcrumbItem>
                    <StyledBreadcrumbSeparator  {...props}>{'/'}</StyledBreadcrumbSeparator>
                </>
            )}
        )}
        {/* Render last item alone*/}
        <StyledBreadcrumbItem key={props.children[props.children.length-1].children}>{props.children[props.children.length-1]}</StyledBreadcrumbItem>
    </BreadcrumbContainer>
)
Breadcrumb.defaultProps ={}
Breadcrumb.propsTypes={
    name: PropTypes.string
}
  
export default Breadcrumb