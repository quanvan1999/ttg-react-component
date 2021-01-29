import React, { useRef } from 'react'

const Input = (props) => {

    return (
        <p ref={props.reff}>
            {props.children}
        </p>
    )
}

export default Input
