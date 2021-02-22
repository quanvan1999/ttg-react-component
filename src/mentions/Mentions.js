/* eslint no-unused-vars: 0 */

import { useEffect, useState } from 'react'
import styled from 'styled-components'
const Label = styled.label`
    display: block;
    background: wheat;
    text-align: center;
    padding: 20px;
    font-size: 30px;
`;
const DivMentions = styled.div`
    position: relative;
    overflow-y: visible;
    font-size: 14px;
    min-height: 63px;
    font-family: monospace;
    font-weight: normal;
    background-color: rgb(255, 255, 255);
`;
const DivSpan = styled.div`
    color: transparent;
    width: 100%;
    border: 1px solid transparent;
    padding: 9px;
    overflow: hidden;
    position: relative;
    overflow-wrap: break-word;
    box-sizing: border-box;
    text-align: start;
    white-space: pre-wrap;
    strong{
        font-weight: inherit;
        background-color: rgb(206, 228, 229);
        color: black
    }  
`;
const Span = styled.span`
    visibility: hidden;
    color: black;
`;
const TextArea = styled.textarea`
    top: 0px;
    left: 0px;
    width: 100%;
    border: 1px solid silver;
    bottom: 0px;
    height: 100%;
    margin: 0px;
    resize: none;
    display: block;
    padding: 9px;
    overflow: hidden;
    position: absolute;
    font-size: inherit;
    box-sizing: border-box;
    font-family: inherit;
    letter-spacing: inherit;
    background-color: transparent;
`;
const Divdata = styled.div`
    z-index: 1;
    min-width: 100px;
    margin-top: 14px;
    background-color: white;
    position: absolute;
    left: ${props => props.left ? props.left : '0'}px;
    top: ${props => props.top ? props.top : '0'}px;
    margin-left: 10px;
`;
const Ul = styled.ul`
    border: 1px solid rgba(0, 0, 0, 0.15);
    bottom: 14px;
    margin: 0px;
    padding: 0px;
    overflow: auto;
    position: absolute;
    font-size: 14px;
    max-height: 100px;
    list-style-type: none;
    background-color: white;
`;
const Li = styled.li`
    cursor: pointer;
    padding: 5px 15px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    &:hover{
        background: gray;
        color: white;
    }
`;
    
const Strong = (props)=>{
    return(
        {props}
    )
}
const Mentions = (props)=>{
    const {data} = props
    const [_isOpen, setOpen] = useState(false)
    const [text, setText] = useState('')
    const [pos_top, setPosTop] = useState(0)
    const [pos_left, setPosLeft] = useState(0)
    const GetValue = (e)=>{
        setText(e.target.value)
    }

    useEffect(()=>{
        var create = document.getElementById('parent')
        var create_span = document.createElement('span')
        create_span.classList.add('mentions')
        // var add_span = document.createTextNode(text)
        // create_span.appendChild(add_span)
        create.appendChild(create_span)
    },[])
    useEffect(()=>{
        // var add_span = document.createTextNode(text)
        var pos_temp = document.getElementsByClassName('mentions')
        pos_temp[pos_temp.length - 1].innerText  = text
        if(pos_temp.length>0){
            var pos = pos_temp[pos_temp.length - 1].getBoundingClientRect()
            setPosLeft(pos.left + pos.width)
            setPosTop(pos.top + pos.height)
        }   
        


        // display list user
        var index = text.search(' @')
        if(index>-1){
            setOpen(true)
            var create = document.getElementById('parent');
            // create strong
            // var create_strong = document.createElement('strong');
            // create_strong.classList.add('strong');
            // var add_strong = document.createTextNode('hihi')
            // create.appendChild(add_strong)

            // var create_span = document.createElement('span');
            // create_span.classList.add('mentions1');
            // var add_span = document.createTextNode(text);
            // create_span.appendChild(add_span)
            // create.appendChild(create_span) 

        }
        else(setOpen(false))
        //end
    },[text])
    const handleChoose = (props)=>{
        setOpen(false)
        // var newStr = text.substring(0, text.length-1);
        // newStr = newStr + props
        // setTimeout(()=>{
        //     setText(newStr)
        // },100)
    }
    return(
        <>
        <Label>Hello world</Label>
        <DivMentions>
            <DivSpan id="parent">
                {/* <Span className="mentions">{text}</Span> */}
                {/* <strong>Hihi</strong> */}
            </DivSpan>
            <TextArea onChange={GetValue} name="mentions" value={text}></TextArea>
            {
                _isOpen && 
                <Divdata {...props} top={pos_top} left={pos_left}>
                    <Ul>
                        {
                            data.map((value, index)=>{
                                return(
                                    <Li key={index} onClick={()=>handleChoose(value)}>{value}</Li>
                                )
                            })
                        }
                    </Ul>
                </Divdata>
            }
        </DivMentions>
        </>
    )
}

Mentions.Title = Label
export default Mentions