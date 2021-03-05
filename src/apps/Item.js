import { navigate } from '@reach/router'
import React from 'react'
import styled from 'styled-components'
import { H2, H4, P } from '../components/elements/Typography'

const Container = styled.div`
    border: 1px solid ${props => props.theme.color.border.primary};
    margin-bottom: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    flex: 1 0 21%;
`
const Headline = styled.div`
    background: ${props => props.theme.color.background.secondary};
    padding: 0.2rem;
`
const Description = styled.div`
    padding: 0.4rem;
`

const Item = (props) => {
    return (
        <Container onClick={props.onClick}>
            <Headline><H4>{props.headline}</H4></Headline>
            <Description><P color="secondary">{props.description}</P></Description>
        </Container>
    )
}

export default Item
