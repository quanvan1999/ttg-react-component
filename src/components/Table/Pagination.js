import { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
    border: 1px solid rgba(34,36,38,.15);
    -webkit-box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);
    box-shadow: 0.5px 2px 2px 2px rgba(34,36,38,.15);
    border-radius: .28571429rem;
    overflow: hidden;

    .active{
        background: gray;
    }
`;
const Ul = styled.ul`
    float: left;
    margin: 0;
    padding: 0;
`;
const Li = styled.li`
    float: left;
    list-style: none;
    padding: 5px 10px;
    background: none;
    position: relative;
    width: auto;
    text-align: center;
    width: 2.5em;
    &:hover{
        background: #eee;
        cursor: pointer;
    }
    &:active{
        color: white;
        background: rgba(34,36,38,.15);
    }
    &::before{
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        height: 100%;
        width: 1px;
        background: rgba(34,36,38,.1);
    }
`;
const A = styled.a``;

function Pagination(props){
    var {totalPage, boundary, sibling, handleGetValue, activePage} = props
    const [page, setPage] = useState(activePage)
    const hanldeSetPage = (props)=>{
        if(props !== "..."){
            if(props <= 1){ setPage(1)}
            else if(props >= totalPage){ setPage(totalPage)}
            else{setPage(props)}
        }
    }
    var data_middle = []; 
    var data_right = []; 
    var data_left = []
    const [paginationMid, setPaginationMid] = useState([])
    const [paginationLeft, setPaginationLeft] = useState([])
    const [paginationRight, setPaginationRight] = useState([])
    useEffect(()=>{
        handleGetValue(page)
        if(boundary && sibling){
            // lay so page 
            for(let i=1; i <= totalPage; i++){
                if(i<=boundary){ data_left.push(i) }
                else if(i>totalPage - boundary){ data_right.push(i) }
                else{ data_middle.push(i) }
            } //end    
        }

        // xét lại pagination nếu totalPage > 10
        if(totalPage <= 10){
            setPaginationMid(data_middle)
            setPaginationLeft(data_left)
            setPaginationRight(data_right)
        }else{

            // sibling*2 + boundary*2 + 3
            // exp 4+4+3 = 11
            let lefttemp = [], righttemp = [], midtemp = []
            if(page <= boundary + sibling + 1){
                lefttemp = data_left
                for(let i=boundary+1; i<=(boundary*2 + sibling*2); i++){
                    midtemp.push(i)
                }
                midtemp.push("...")
                righttemp = data_right
            }
            else if(page >= (boundary + sibling - 1) && page <= (totalPage - sibling - boundary - 1)){
                lefttemp = data_left
                righttemp = data_right
                midtemp.push("...")
                for(let i=(page - sibling); i<=(page+sibling); i++){
                    midtemp.push(i)
                }
                midtemp.push("...")
            }
            else{
                lefttemp = data_left
                midtemp.push("...")
                for(let i=(totalPage - boundary - sibling*2 - 1); i<=(totalPage - boundary); i++){
                    midtemp.push(i)
                }
                righttemp = data_right
            }
            setPaginationLeft(lefttemp)
            setPaginationMid(midtemp)
            setPaginationRight(righttemp)
        }
    },[page])

    return( 
        <PaginationParent>
            <PaginationPage>
                <Ul>
                    <Li onClick={()=>hanldeSetPage(page - 1)}><A>«</A></Li>
                    {
                        paginationLeft.map((value, index)=>{
                            return(
                                <Li key={index} onClick={()=>hanldeSetPage(value)} value={value}>
                                    <A>{value}</A>
                                </Li>
                            )
                        })
                    }
                    { paginationMid.map((value, index)=>{
                            return(
                                <Li key={index} onClick={()=>hanldeSetPage(value)} value={value}>
                                    <A>{value}</A>
                                </Li>
                            )
                        })
                    }
                    {
                        paginationRight.map((value, index)=>{
                            return(
                                <Li key={index} onClick={()=>hanldeSetPage(value)} value={value}>
                                    <A>{value}</A>
                                </Li>
                            )
                        })
                    }
                    <Li onClick={()=>hanldeSetPage(page + 1)}><A>»</A></Li>
                </Ul>
            </PaginationPage>
        </PaginationParent>
    )
}

Pagination.defaultProps = {
    boundary: 1,
    sibling: 1
}

Pagination.propTypes ={
    boundary: PropTypes.number,
    sibling: PropTypes.number
}

export default Pagination