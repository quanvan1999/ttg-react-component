import React from 'react'
import useTypeWriter from '../../hooks/useTypeWriter'

const TypeWriter = (props) => {
    let data = useTypeWriter(props.text, 50)

    return (
        <props.as>
            {data}
        </props.as>
    )
}

TypeWriter.defaultProps = {
    as: `p`
}

export default TypeWriter
