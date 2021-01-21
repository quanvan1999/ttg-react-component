import React from 'react'
import styled from 'styled-components'

const Input = styled.textarea`
    background: transparent;
    border: none;
    color: #777;
    outline: none;
    font-size: 1rem;
    font-weight: 400;
    padding: 5px;
    width: 100%;
    &:focus {
        outline: none;
    }
`

const Li = styled.li`
    margin: 3px 10px 3px 0;
`

const LiMentions = styled.li`
    border: 1px solid #eceeef;	
    background-color: #f3f3f3;
    padding: 3px 5px;
`

const LiInput = styled.li`
    flex: 2;
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    margin: 0;
    list-style: none;
    align-items: center;
    box-sizing: border-box;
`

const MentionsInput = ({ mentions, onChange, placeHolder }) => {

    const stopPropagationThen = func =>
        e => {
            e.stopPropagation()
            func(e)
        }

    const onKeyDown = e => {
        if (e.keyCode === 13 && e.target.value !== "") {
            onChange && onChange([...mentions, e.target.value])
            e.target.value = ""
        }
        if (e.keyCode === 8 && mentions.length !== 0 && e.target.value === "") {
            onChange && onChange([...mentions.slice(0, mentions.length - 1)])
            e.target.value = ""
        }
    }

    const removeMention = Mention =>
        _ => onChange(mentions.filter(t => t !== Mention))

    return (
            <Ul Mention="div">
                {mentions.map((Mention, i) =>
                    <LiMentions
                        key={`${Mention}_${i}`}
                        onClick={stopPropagationThen(removeMention(Mention))}>
                        {Mention}
                    </LiMentions>)
                }
                <LiInput>
                    <Input
                        onChange={stopPropagationThen(() => { })}
                        onKeyDown={stopPropagationThen(onKeyDown)}
                        placeholder={placeHolder ?? "Add Item"}>
                    </Input>
                </LiInput>
            </Ul>
    )
}

export default MentionsInput