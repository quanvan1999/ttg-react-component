import React, { useEffect, useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Button } from '../components/elements'
import theme from '../utils/theme'
import FormBody from './FormBody'
import AddNewButton from './AddNewButton'
import {v4 as uuid} from 'uuid'
import { navigate, useLocation } from '@reach/router'
const Container = styled.div`
    background: ${props => props.theme.color.background.primary};
    height: 100vh;
    color: ${props => props.theme.color.text.primary};
`
const StyledForm = styled.div`
    border: 1px solid ${props => props.theme.color.border.primary};
    width: 100%;
    background: ${props => props.theme.color.background.primary};
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
`
const StyledHeader = props => `
    background: transparent;
    width: 100%;
    border:none;
    text-align: center;
    margin-bottom: 0.5rem;
    &:focus {
        outline: none;
        border-bottom: 1px solid ${props.theme.color.fill.primary};
    }
`
const StyledTitle = styled.input`
    font-size: 1.8rem;
    color: ${props => props.theme.color.text.primary};
    ${StyledHeader}
`
const StyledDesc = styled.input`
    font-size: 1.4rem;
    color: ${props => props.theme.color.text.secondary};
    ${StyledHeader}
`
const TitleContainer = styled.div`
    background: ${props => props.theme.color.background.secondary};
    padding: 0.2rem 0.5rem;
    border-bottom: ${props => props.theme.color.border.primary};
    margin-bottom: 0.5rem;
    & h3 {
        font-size: calc(1.3rem + .6vw);
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }
`
const SaveContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;

`
const Form = () => {
    const [data, setData] = useState([])
    const [headline, setHeadline] = useState("")
    const location = useLocation()
    const [description, setDescription] = useState("")
    const addData = (text) => {
        setData([...data, text])
    }
    const saveData = () => {
        let value = JSON.parse(localStorage.getItem('formData')) || []
        value.push({id: uuid(),headline: headline, description: description, value: data})
        localStorage.setItem('formData', JSON.stringify(value))
        navigate('/app/form', )
    }
    useEffect(() => {
        if (location.state.id) {
            setHeadline(location.state.headline)
            setDescription(location.state.description)
            setData(location.state.value)
            window.history.replaceState({}, '', '/app/form/new')
        }
    }, [location.state])
    return (
        <ThemeProvider theme={theme.dark}>
            <Container>
                <StyledForm>
                    <TitleContainer>
                        <h3>Tạo quy trình</h3>
                    </TitleContainer>
                    <StyledTitle spellCheck={false} fullWidth placeholder="Tên quy trình" value={headline} onChange={e => setHeadline(e.target.value)}/>
                    <StyledDesc spellCheck={false} fullWidth placeholder="Mô tả quy trình" value={description} onChange={e => setDescription(e.target.value)}/>

                    <FormBody data={data} setData={setData}/>

                    <AddNewButton addData={addData}/>
                </StyledForm>
                <SaveContainer>
                    <Button onSelect={() => saveData()}>Save</Button>
                    <Button type="outline" onSelect={() => navigate('/app/form')}>Cancel</Button>
                </SaveContainer>
            </Container>
        </ThemeProvider>
    )
}

export default Form
