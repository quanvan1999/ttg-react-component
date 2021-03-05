import React, { useEffect, useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { Button } from '../components/elements'
import theme from '../utils/theme'
import {Router, navigate, useNavigate} from '@reach/router'
import Item from './Item'
const Container = styled.div`
    background: ${props => props.theme.color.background.primary};
    height: 100vh;
    color: ${props => props.theme.color.text.primary};
`
const TitleContainer = styled.div`
    background: ${props => props.theme.color.background.secondary};
    padding: 0.2rem 0.5rem;
    border-bottom: ${props => props.theme.color.border.primary};
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    & h3 {
        font-size: calc(1.3rem + .6vw);
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }
`
const ItemContainer = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1rem;
`
const Main = () => {
    const [content, setContent] = useState([])
    useEffect(() => {
        setContent(JSON.parse(localStorage.getItem('formData')) || [])
    }, [])
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme.dark}>
            <Container>
                <TitleContainer>
                    <h3>Trang chủ</h3>
                    <Button onSelect={() => navigate('./form/new', {state: {}, replace: false})}>Tạo Form</Button>
                </TitleContainer>
                <ItemContainer>
                    {content.map(item => 
                        <Item {...item} key={item.id} onClick={() => navigate('./form/new', {state: {...item}, replace: false})}/>
                    )}
                </ItemContainer>
                
            </Container>
        </ThemeProvider>
    )
}
export default Main
