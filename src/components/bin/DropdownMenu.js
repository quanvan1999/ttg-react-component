import React, { useState } from "react";
import styled from "styled-components";


const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    overflow: hidden;
    background-color: #333;
    padding: 0px;
    background-color: ${props => props.color ? "#CCC" : "lightblue"};
    color: black;
    font-weight: bold;
    margin-top:5px;
`;

const StyledLi = styled.li`
    float: left;
    height: 100%;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: red;
    }
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 100px;
    z-index: 1;
    margin-top:2px;
`;

const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent} {
        display: block
    }
`;

const StyledA = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
`;

const SubA = styled(StyledA)`
    text-decoration: none;
    display: block;
    text-align: left;
    background-color: white;
    padding: 10px;
    margin-left:-10px;
    &:hover{
        background-color: rgba(165, 156, 135, 1 );
    }
`;


const DropdownMenu = (props) => {
    const [is_dropdown, setIsDropdown] = useState(false); // kiểm tra ng dùng đã chọn hay chưa
    const [valuedropwdown, setvalueDropdown] = useState(); //lấy value ng dùng chọn

    // thay đổi giá trị khi người dùng chọn
    const handleClick = (props) =>{
        // setvalueDropdown(props);
        // setIsDropdown(true);
        console.log(props)
    }
    return (
        <StyledUl color = {props.color}>
            <DropDownLi>
                <StyledA >
                    { props.value }
                </StyledA>
                <DropDownContent>
                    {
                        props.data.map((item, index)=>{
                            return(
                                <SubA key={index} onClick={()=>handleClick(item.name)}>
                                    {item.name}
                                </SubA>
                            )
                        })
                    }
                </DropDownContent>
            </DropDownLi>
        </StyledUl>
    );
}

export default DropdownMenu;