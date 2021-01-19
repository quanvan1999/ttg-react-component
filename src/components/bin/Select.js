import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'

const StyledComboBox = styled.div`
    background-color: yellow;
    padding: 8px;
    border: 1px solid black;
`;

function useOutside(ref, func = () => console.log("Clicked Outside")) {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                func()
            }
        }
        document.addEventListener("mousedown", handleClickOutside)

        //the function in return will execute when component is unmount (remove)
        return () => {
            console.log("Cleaning up")
            document.removeEventListener("mousedown", handleClickOutside)
        }
    })
}

const Select = () => {
    const [state, setState] = useState(true)
    const wrapper = useRef(null)
    useOutside(wrapper)
    return (
        <div>
            <button onClick={() => setState(false)}>Remove combobox</button>
            {state && <StyledComboBox onClick={() => console.log("Click inside")} ref={wrapper}>
                Combobox
            </StyledComboBox>}
        </div>
    )
}

export default Select