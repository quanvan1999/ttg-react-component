import { useEffect, useRef, useState } from 'react';
import { act } from 'react-dom/test-utils';
import styled from 'styled-components'

const PaginationParent = styled.div`
    font-size: 16px;
    line-height: 1.6; 
    font-family: Marmelad,"Lucida Grande",Arial,"Hiragino Sans GB",Georgia,sans-serif;
    box-sizing: initial;
    
    ul{
        li:last-child>a {
            border-radius: 0 3px 3px 0;
        }
    }
`;
const PaginationPage = styled.div`
    float: left;
`;
const Ul = styled.ul`
    float: left;
    margin: 0;
    padding: 0;
`;
const Li = styled.li`
    float: left;
    border: 1px solid #aaa;
    list-style: none;
    padding: 5px 10px;
    background: ${props => props.background ? 'gray' : 'none'};
    &:hover{
        background: #eee;
        cursor: pointer;
    }

    &:active{
        color: black;
        background: #eee;
    }
`;
const A = styled.a``;

function Pagination(props){
    var {totalPage, boundary, sibling, handleSetActive, activePage} = props
    var data_middle = []; 
    var data_right = []; 
    var data_left = []
    // const [boundarytemp, setBoundary] = useState(boundary)
    // const [siblingtemp, setSibling] = useState(sibling)
    const [paginationMid, setPaginationMid] = useState([])
    const [paginationLeft, setPaginationLeft] = useState([])
    const [paginationRight, setPaginationRight] = useState([])
    useEffect(()=>{
        if(boundary && sibling){
            // lay so page 
            for(let i=1; i <= totalPage; i++){
                if(i<=boundary){ data_left.push(i) }
                else if(i>totalPage - boundary){ data_right.push(i) }
                else{ data_middle.push(i) }
            } //end    
        }else{
            throw new Error ("You have to pass variable boundary and sibling");
        }

        // xét lại pagination nếu totalPage > 10
        if(totalPage <= 10){
            setPaginationMid(data_middle)
            setPaginationLeft(data_left)
            setPaginationRight(data_right)
        }else{
            let lefttemp = [], righttemp = [], midtemp = []
            if(activePage < boundary + sibling + 1){
                lefttemp = data_left
                midtemp = [boundary + sibling , boundary + sibling + 1, boundary + sibling + 2, "..."]
                righttemp = data_right
            }
            else if(activePage >= (boundary + sibling + 1) && activePage <= (totalPage - sibling - boundary - 1)){
                lefttemp = data_left
                righttemp = data_right
                midtemp = ["...", activePage-1, activePage, activePage+1,"..."]
            }
            else if(activePage >= (totalPage - boundary - sibling - 1) && activePage < (totalPage - boundary )){
                lefttemp = data_left
                midtemp = ["...",activePage, activePage + 1]
                righttemp = data_right
            }
            else{
                lefttemp = data_left
                midtemp = ["...",totalPage - boundary -sibling, totalPage - boundary - sibling + 1]
                righttemp = data_right
            }
            setPaginationLeft(lefttemp)
            setPaginationMid(midtemp)
            setPaginationRight(righttemp)
        }
    },[activePage])

    return(
        <PaginationParent>
            <PaginationPage>
                <Ul>
                    <Li onClick={()=>handleSetActive(activePage - 1)}><A>«</A></Li>
                    {
                        paginationLeft.map((value, index)=>{
                            return(
                                <Li key={index} onClick={()=>handleSetActive(value)}>
                                    <A>{value}</A>
                                </Li>
                            )
                        })
                    }
                    { paginationMid.map((value, index)=>{
                            return(
                                <Li key={index} onClick={()=>handleSetActive(value)} value={value}>
                                    <A>{value}</A>
                                </Li>
                            )
                        })
                    }
                    {
                        paginationRight.map((value, index)=>{
                            return(
                                <Li key={index} onClick={()=>handleSetActive(value)}>
                                    <A>{value}</A>
                                </Li>
                            )
                        })
                    }
                    <Li onClick={()=>handleSetActive(activePage + 1)}><A>»</A></Li>
                </Ul>
            </PaginationPage>
        </PaginationParent>
    )
}

export default Pagination