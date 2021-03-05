import styled from "styled-components"
import { ButtonGroup, Button } from "../components/elements"
import IcoPlus from "../components/icons/IcoPlus"
import {v4 as uuid} from 'uuid'
const Container = styled.div`
    display: flex;
    padding: 8px;
    gap: 8px;
`

const Selection = (props) => {
    const arr = [
        {id: "text", name: "Text Box"},
        {id: "date", name: "Date Picker"},
        {id: "pmention", name: "Mention"},
    ]
    const handleSelect = (value) => {
        props.addData({id: uuid(), name: "", type: value, headline: "", content: {}})
        props.toggle()
    }
    return (
        <Container>
            <IcoPlus onClick={() => props.toggle()}/>
            <ButtonGroup onSelect={(value) => handleSelect(value) }>
                {arr.map(item => 
                    <Button id={item.id} key={item.id} value={item.id}>{item.name}</Button>)
                }
            </ButtonGroup>
        </Container>
    )
}

export default Selection