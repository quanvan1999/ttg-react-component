import { useState, useEffect } from "react"
import styled from "styled-components"
import { Button, SimpleInput } from "../components/elements"
import IcoCopy from '../components/icons/IcoCopy'
import IcoArrowDown from '../components/icons/IcoArrowDown'
import IcoArrowUp from '../components/icons/IcoArrowUp'
import IcoTrash from '../components/icons/IcoTrash2'
import { H4 } from "../components/elements/Typography"
import ControlBody from './ControlBody'
const Container = styled.div`
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: 1px solid ${props => props.theme.color.border.primary};
    border-bottom: 0.2rem solid ${props => props.theme.color.fill.primary};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const ControlTitle = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 0.4rem;
`
const StyledInput = styled.input`
    background: transparent;
    border: none;
    border-bottom: 1px solid ${props => props.theme.color.border.primary};
    width: 100%;
    color: ${props => props.theme.color.text.primary};
    &:focus {
        outline: none;
    }
`
const TopBar = styled.div`
    display: flex;
    background: ${props => props.theme.color.background.secondary};
    margin: -0.5rem;
    padding: 0.4rem;
`
const IconContainer = styled.div`
    margin-left: auto;
    display: flex;
    gap: 0.5rem;
`
const FormControl = (props) => {
    const handleData = (type, value) => {
        let newData = props.data
        newData.find(item => item.id === props.id)[type] = value
        props.setData(newData)
    }
    const [headline, setHeadline] = useState(props.headline)
    const [name, setName] = useState(props.name)
    const selfDelete = () => {
        props.setData(props.data.filter(item => item.id !== props.id))
    }
    useEffect(() => {
        handleData("headline", headline)
        handleData("name", name)
    })
    return (
        <Container>
            <TopBar>
                <IconContainer>
                    <IcoCopy size={"small"}/>
                    <IcoTrash size={"small"} onClick={() => selfDelete()}/>
                    <IcoArrowUp size={"small"}/>
                    <IcoArrowDown size={"small"}/>
                </IconContainer>
            </TopBar>
            <ControlTitle>
                <H4>{props.number}</H4>
                <StyledInput placeholder="Tên câu hỏi" fullWidth value={headline} onChange={(e) => setHeadline(e.target.value)}/>
                <StyledInput placeholder="Tên dữ liệu" fullWidth value={name} onChange={(e) => setName(e.target.value)}/>
            </ControlTitle>
            <ControlBody type={props.type}/>

        </Container>
        
    )
}

export default FormControl