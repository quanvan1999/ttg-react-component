import React, {useState, useRef, useEffect} from 'react'

const Element = (props) => {
    let r = Math.ceil(Math.random()*125)
    let g = Math.ceil(Math.random()*125)
    let b = Math.ceil(Math.random()*125)
    return <span offset={props.offset} ref={props.reff} style={{backgroundColor: "RGB(" + r + "," + g + "," + b + ")"}} tabIndex={1}>{props.children}</span>
}

const Test = (props) => {
    const [state, setState] = useState(
        [
            {id: 1, reff: null, content: "content1"}, 
            {id: 2, reff: null, content: "content2"}, 
            {id: 3, reff: null, content: "content3"}
        ]
    )
    const curId = useRef(4)
    const passRef = (name, r) => {
        let x = state
        x.find(xx => xx.id === name).reff = r
        setState(x)
    }
    const handleInput = (text) => {
        let lchar = text[text.length - 1]
        if (lchar === "@") {
            setState([...state, {id: curId.current, reff: null, content: "\u200B"}])
            curId.current += 1
        }
    }
    useEffect(() => {
        if (state.find(s => s.id === curId.current - 1)) {
            console.log("Run")
            setTimeout(() => {
                state.find(s => s.id === curId.current - 1).reff.focus()
                console.log("Focus")
                var range,selection;
                range = document.createRange();//Create a range (a range is a like the selection but invisible)
                range.selectNodeContents(state.find(s => s.id === curId.current - 1).reff);//Select the entire contents of the element with the range
                range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
                selection = window.getSelection();//get the selection object (allows you to change selection)
                selection.removeAllRanges();//remove any selections already made
                selection.addRange(range);//make the range you have just created the visible selection
                
            }, 0)
            
        }

    }, [state])
    return (
        <div 
            contentEditable 
            onInput={e => handleInput(e.target.innerText)}
            suppressContentEditableWarning
            style={{width: "100%"}}
        >
            {state.map((v) => {
                return (
                    <Element offset={v.id} reff={(r) => passRef(v.id, r)}>{v.content}</Element>
                )
            })}
        </div>
    )
}

export default Test