import { useEffect, useState } from 'react';
import styled from 'styled-components'

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
    // lay so trang
    var page = [];
    for(var i=1; i<=props.totalPage; i++){
        page.push(i)
    } //end

    useEffect(()=>{
        var x = document.querySelectorAll('a');
        x[1].classList.add('active')
    })

    const Active = (index)=>{
        var x = document.querySelectorAll('a');
        for(var i=1; i<x.length - 1; i++){
            if(index === i){
                x[index].classList.add('active');
            }
            else{
                x[i].classList.remove('active');
            }
        }
    }
    const NextPage = ()=>{
        var x = document.querySelectorAll('a');
        var classActive = document.getElementsByClassName('active');
        if(classActive.length > 0){
            var temp = Number(classActive[0].getAttribute('value')) + 1;
            var index = 0;
            if(temp === x.length -1){
                index = x.length -2;
            }
            else{
                index = temp
            }
            for(var i=1; i<x.length - 1; i++){
                if(index === i){
                    x[i].classList.add('active')
                }
                else{
                    x[i].classList.remove('active')
                }
            }
        }
    }   
    const PrePage = ()=>{
        var x = document.querySelectorAll('a');
        var classActive = document.getElementsByClassName('active');
        if(classActive.length > 0){
            var temp = Number(classActive[0].getAttribute('value')) - 1;
            var index = 0;
            if(temp > 1){
                index = temp
            }
            else{
                index = 1
            }
            for(var i=1; i<x.length - 1; i++){
                if(index === i){
                    x[i].classList.add('active')
                }
                else{
                    x[i].classList.remove('active')
                }
            }
        }
    }
    return(
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
    )
}

export default Pagination