import {Button} from '../components/elements'
import {useState} from 'react'
import IcoPlus from '../components/icons/IcoPlus'
import Selection from './Selection'
import styled from 'styled-components'
const Container = styled.div`
    padding: 0.5rem;
`
const AddNewButton = (props) => {
    const [state, setState] = useState(false)
    return (
        <Container>
            {state ? 
            <Selection toggle={() => setState(false)} addData={props.addData}/> :
            <Button onSelect={() => setState(true)}>Add New</Button>
            }
            
        </Container>
    )
}

export default AddNewButton