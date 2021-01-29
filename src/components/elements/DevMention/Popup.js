import React, {useRef, useState, useEffect} from 'react'
import styled from 'styled-components'

const PopupContainer = styled.div`
    min-width: 120px;
    background-color: #EEE;
    position: absolute;
    top: 120%;
    border: 1px solid #CCC;
    display: flex;
    flex-direction: column;
    gap: 1px;
    border-radius: 5px;
    overflow: hidden;
`
const Option = styled.li`
    list-style: none;
    padding: 8px 16px;
    background: #171717;
    &:hover {
        background: #333333;
    }
`

const Popup = (props) => {
    const [data, setData] = useState(["La Quoc Anh", "Nguyen Hoang Tan", "Le Hoang Vu"])
    return (
        <PopupContainer>
            {data.map(d => <Option key={d} onClick={() => props.onSelect(d)}>{d}</Option>)}
        </PopupContainer>
    )
}

export default Popup