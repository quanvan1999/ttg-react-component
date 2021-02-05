import {useRef, useEffect, useState} from 'react'

const useTypeWriter = (text, speed = 100) => {
    const i = useRef(0)
    const [data, setData] = useState("")

    useEffect(() => {
        if (i.current === text.length)
            return
        else {
            setTimeout(() => {
                setData(data + text[i.current])
                i.current += 1
            }, speed)
            
        }
    }, [data, text, speed])

    return data
}
export default useTypeWriter