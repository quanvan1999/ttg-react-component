import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import Popup from './Popup'
import Test from './Test'
import { MentionsInput, Mention } from 'react-mentions'
const Container = styled.div`
    position: relative;
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
    caret-color: red;
    user-select: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
`

const Textc = (props) => {
    return (
        <Text suppressContentEditableWarning ref={props.reff}>{props.children}</Text>
    )
}
const Tagc = (props) => {
    return (
        <Tag ref={props.reff} suppressContentEditableWarning contentEditable="false">{props.children}</Tag>
    )
}

const Text = styled.span`
    display: inline;
    color: #EEE;
`;
const Tag = styled.strong`
    display: inline;
    color: #FA0;
`
const Element = (props) => {
    useEffect(() => {
        return (() => {
            console.log("Good bye")
        })
    },[])
    return (
        props.type === "text" ? 
        <Textc 
            contentEditable 
            suppressContentEditableWarning 
            reff={(r) => props.passRef(props.id, r)}
        >
            {props.children}
        </Textc> :
        <Tagc reff={(r) => props.passRef(props.id, r)}>{props.children}</Tagc>
    )
}
const MyMention = () => {
    let currentId = useRef(4)
    let inputRef = useRef()

    const [state, setState] = useState([
        {id: 1, type: "text", content: "Ten toi la ", reff: null},
        {id: 2, type: "tag", content: "La Quoc Anh", reff: null},
        {id: 3, type: "text", content: "oke", reff: null}
    ])

    const genNew = (type, content) => {
        currentId.current += 1
        return {id: currentId.current - 1, type: type, content: content, reff: null}
    }

    const selectTag = (v) => {
        setState([...state, genNew("tag", v), genNew("text", "\u200B")])
        moveCaretToEnd(inputRef.current)
    }

    const handleInput = (text) => {
        if (state[state.length - 1].type === "tag") {
            setState([...state, genNew("text", "\u200B")])
        }
    }

    useEffect(() => {
        console.log(currentId.current)
        if (state.find(item => item.id === currentId.current - 1)) {
            let x = state.find(item => item.id === currentId.current - 1).reff
            x.focus()
            moveCaretToEnd(x)
        }
    })

    const moveCaretToEnd = (element) => {
        var range,selection;
        range = document.createRange();//Create a range (a range is a like the selection but invisible)
        range.selectNodeContents(element);//Select the entire contents of the element with the range
        range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
        selection = window.getSelection();//get the selection object (allows you to change selection)
        selection.removeAllRanges();//remove any selections already made
        selection.addRange(range);//make the range you have just created the visible selection
    }
    const passRef = (id, r) => {
        let x = state
        x.find(xx => xx.id === id).reff = r
        setState(x)
    }

    return (
        <Container>
            <StyledInput 
                ref={inputRef}
                contentEditable="true" 
                role="textbox" 
                spellCheck="true"
                suppressContentEditableWarning
                onInput={(e) => handleInput(e.target.innerText)}
            >
                {state.map(v => <Element type={v.type} id={v.id} passRef={passRef}>{v.content}</Element>)}
            </StyledInput>

            {true && <Popup onSelect={(v) => selectTag(v)}/>}
        </Container>
    )
}

export default MyMention
