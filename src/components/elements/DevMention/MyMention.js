import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import Popup from './Popup'
import Input from './Input'
const Container = styled.div`
    position: relative;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 100%;
    height: 40px;
`

const StyledInput = styled.div`
    outline: none;
    padding: 6px 12px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
`
const Label = styled.p`
    min-height: 40px;
    width: 100%;
`
const Text = styled.div`
    display: inline;
    color: #171717;
    background: red;
    &:hover {
        background: green;
    }
    &:active {
        background: yellow;
    }
`;
const Tag = styled.div`
    display: inline;
    color: #171766;
`
const MyMention = () => {
    const [value, setValue] = useState([
        {id: 1, type: "text", content: "Ten toi la "},
        {id: 2, type: "tag", content: "La Quoc Anh"},
        {id: 3, type: "text", content: "oke"}
    ])

    const myRef = useRef()

    const selectTag = (v) => {
        setValue(value + v)
        myRef.current.appendChild(<Tag>{v}</Tag>)
        moveCaretToEnd(myRef.current)
    }

    function moveCaretToEnd(contentEditableElement)
    {
        var range,selection;
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    const handleText = (value) => {
        setValue(value)
    }
    return (
        <>
        <Label>{"Content: " +   value}</Label>
        <Container>
            <StyledInput 
                
                //onKeyUp={() => setValue(myRef.current.innerText)} 
                contentEditable="true" 
                role="textbox" 
                spellCheck="true"
                suppressContentEditableWarning
                ref={myRef}
                onInput={(v) => handleText(v.target.innerText)}
            >
                abc
            </StyledInput>
            {value[value.length - 1] === "@" && <Popup onSelect={(v) => selectTag(v)}/>}
        </Container>

        </>
    )
}

export default MyMention
