import React from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const DivStyle = styled.div`
    margin: ${props => props.demo ? "8px" : "0"};
    display: ${props => props.fluid ? "block" : "inline-block"};
    border-radius: 50%;
    box-shadow: 0px 0px 5px rgba(0,0,0,1);
    vertical-align: bottom;
    height:  ${props => props.fluid ? "100%" : props.theme.avatarSize[props.size] || "32px" };
`;
const ImgStyle = styled.img`
    display:block;
    width:  ${props => props.fluid ? "100%" : props.theme.avatarSize[props.size] || "36px" };
    height:  ${props => props.fluid ? "100%" : props.theme.avatarSize[props.size] || "36px" };
    border-radius:50%;
`;
const DivImg = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:  ${props => props.fluid ? "100%" : props.theme.avatarSize[props.size] || "32px" };
    min-height:  ${props => props.fluid ? "100%" : props.theme.avatarSize[props.size] || "32px" };
    border-radius:50%;
    background: ${props => props.theme.color.border.primary}; 
    font-size: ${props => props.theme.textSize.small};
    font-weight:bold;
    font-size: ${props => props.theme.textSize.medium};
    color:${props => props.theme.color.text.primary};
`;
const Avatar = (props) => {
    let strNameImg = props.alt
    let lastName = strNameImg.split(' ').slice(-1).join(' ');
    let NameImg =lastName.split(/\s/).reduce((response,word)=> response+=word.toUpperCase().slice(0,1),'')
    let inner = props.src ? 
        <ImgStyle {...props}></ImgStyle> :
        <DivImg {...props}>{NameImg}</DivImg>

    return <DivStyle {...props}>{inner}</DivStyle>
}
Avatar.defaultProps = {
    alt: "",
    fluid: false,
    size: "medium",
    demo: false,
    src: "https://source.unsplash.com/random/400x400"
}
Avatar.propTypes={
    fluid:PropTypes.bool,
    alt: PropTypes.string,
    src: PropTypes.string,
    size: PropTypes.string,
    demo: PropTypes.bool
}
export default Avatar