import React from 'react'
import styled from 'styled-components'
import {Button} from '../components/elements'
import FormControl from './FormControl'

const Container = styled.div`
    padding: 0.5rem;
    &:hover {
        background-color: rgba(0,0,0, 0.1)
    }
`
const FormBody = (props) => {
    let i = 1;
    return (
        <div>
            {props.data.map(item => 
                <Container>
                    <FormControl 
                        data={props.data} 
                        setData={props.setData} 
                        number={i++} 
                        type={item.type} 
                        headline={item.headline} 
                        name={item.name}
                        id={item.id} 
                        key={item.id}
                    />
                </Container>
                )
            }
        </div>
    )
}

export default FormBody
