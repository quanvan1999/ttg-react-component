import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Table from '../Table/Table'

const DivPagination = styled.div`
    display: inline-block;
    .active{
        background: #8080804f;
    }
`;

const ChildPagination = styled.a`
    color: black;
    float: left;
    padding: 8px 16px;
    -webkit-text-decoration: none;
    text-decoration: none;
    border-right: 1px solid rgba(0,0,0,.05);
    background: rgba(0,0,0,.05);
    cursor: pointer;

    &:active{
        color: white;
    }

    &:hover{
        background: #8080804f;
    }
`;

// truyen vao totalPage
const Pagination = (props) =>{
    const {totalPage, headers, rows, pageSize, getvalue} = props;
    var temp_page = [];
    var size = pageSize;
    const [pagemax, setPageMax] = useState(size);
    const [pagemin, setPageMin] = useState(1);
    for(let i=pagemin - 1; i<pagemax; i++){
        temp_page.push(rows[i])
    }

    useEffect(()=>{
        var search_active = document.querySelectorAll('a');
        search_active[1].classList.add('active')
    })

    // lay so trang
    var page = [];
    for(var i=1; i<=totalPage; i++){
        page.push(i)
    } //end

    const Active = (index)=>{
        setPageMax(size * index)
        setPageMin(size * index -size + 1)
        setTimeout(()=>{
            var x = document.querySelectorAll('a');
            for(var i=1; i<x.length - 1; i++){
                if(index === i){
                    x[index].classList.add('active');
                }
                else{
                    x[i].classList.remove('active');
                }
            } 
        },1)
    }

    const NextPage = ()=>{
        var x = document.querySelectorAll('a');
        var classActive = document.getElementsByClassName('active');
        if(classActive.length > 0){
            var temp = Number(classActive[0].getAttribute('value')) + 1;
            var next = 0;
            if(temp === x.length - 1){next = x.length - 2}
            else{next = temp}
            setPageMax(size * next)
            setPageMin(size * next -size + 1)
            setTimeout(()=>{
                for(var i=1; i<x.length - 1; i++){
                    if(next === i){
                        x[i].classList.add('active')
                    }
                    else{
                        x[i].classList.remove('active')
                    }
                }
            },1)
        }
    }   
    const PrePage = ()=>{
        var x = document.querySelectorAll('a');
        var classActive = document.getElementsByClassName('active');
        if(classActive.length > 0){
            var temp = Number(classActive[0].getAttribute('value')) - 1;
            var pre_temp = 0;
            if (temp === 0) { pre_temp = 1 }
            else{ pre_temp = temp }
            setPageMax(size * pre_temp)
            setPageMin(size * pre_temp -size + 1)
            setTimeout(()=>{
                for(var i=1; i<x.length - 1; i++){
                    if(pre_temp !== i){
                        x[i].classList.remove('active')
                    }
                    else{
                        x[i].classList.add('active')
                    }
                }
            },1)
        }
    }
    
    return(
        <>
        <Table headers={headers} rows={temp_page} getvalue={getvalue}/>
        <DivPagination>
            <ChildPagination onClick={()=>PrePage()} value="pre">&laquo;</ChildPagination>
            {
                page.map((item, index)=>{
                    return(
                        <ChildPagination 
                            onClick={()=>Active(item)} 
                            value={item} 
                            key={index}
                            >{item}
                        </ChildPagination>
                    )
                })
            }
            <ChildPagination onClick={()=>NextPage()} value="next">&raquo;</ChildPagination>
        </DivPagination>
        </>
    )
}

export default Pagination