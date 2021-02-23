import React, { useEffect } from 'react'
import {ThemeProvider} from 'styled-components'
import { Button } from '../components/elements'
import theme from '../utils/theme'
const Signoff = () => {
    useEffect(() => {
        
    })
    return (
        <ThemeProvider theme={theme.dark}>
            <Button>Hello</Button>
        </ThemeProvider>
    )
}

export default Signoff
