import  React from "react"
import styled from "styled-components"
import  PropTypes from "prop-types"

const AvatarPlus= styled.div`
    background: ${props => props.theme.color.border.primary}; 
    width:  ${props => props.theme.avatarSize[props.size] || "36px" };
    height:  ${props => props.theme.avatarSize[props.size] || "36px" };
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:bold;
`;
const DivStyle= styled.div`
    margin: ${props => props.demo ? "8px" : "0"};
    display:flex;
    align-items:center;
    &>div{
        margin-right: -8px;
    }
    & .avatar-max-limited{
        width:  ${props => props.theme.avatarSize[props.size] || "36px" };
        height:  ${props => props.theme.avatarSize[props.size] || "36px" };
        z-index: 0;
    }
`;

const AvatarGroup = (props) =>{
    const {children: childrenProp,max=5} = props
    const clampedMax= max < 2 ? 2 : max
    const children = React.Children.toArray(childrenProp)  
    const extraAvatars = children.length > clampedMax ? children.length - clampedMax + 1 : 0

    return(
        <DivStyle {...props}>
      {children.slice(0, children.length - extraAvatars).map((child, index) => {
        return React.cloneElement(child, {
          style: {zIndex: children.length - index}, size: props.size
        });
      })}
      {extraAvatars !== 0 && 
        <AvatarPlus {...props} className="avatar-max-limited">
          +{extraAvatars}
        </AvatarPlus>
      }
    </DivStyle>
    )
}

AvatarGroup.propTypes = {
    size: PropTypes.string,
    max: PropTypes.number,
    demo: PropTypes.bool
}

export default AvatarGroup