import {useState, useRef, useMemo, useCallback, useEffect} from 'react'
import {convertToRaw, EditorState} from 'draft-js'
import createMentionPlugin, {defaultSuggestionsFilter} from '@draft-js-plugins/mention'
import Editor from '@draft-js-plugins/editor'
import styled from 'styled-components'
import '@draft-js-plugins/mention/lib/plugin.css';
import PropTypes from 'prop-types'
import CalendarSuggestion from './CalendarSuggestion/CalendarSuggestion'

const ItemStyle = props => `
    border-bottom: 1px solid ${props.theme.color.border.primary};
    font-size: ${props.theme.textSize.medium};
`

const Container = styled.div`
    margin: ${props => props.demo ? "1rem" : "0"};
    border: 1px solid ${props => props.theme.color.border.primary};
    cursor: text;
    padding: 6px 8px;
    border-radius: 4px;
    background: transparent;
    //mention
    .m6zwb4v {
        color: ${props => props.theme.color.fill.info};
        background: transparent;
        font-style: italic;
    }
    //popup item
    .m1ymsnxd {
        ${ItemStyle}
    }
    //popup item on hover
    .m126ak5t {
        ${ItemStyle};
        background-color: ${props => props.theme.color.border.primary};
    }
    //popup container
    .mnw6qvm {
        border: 1px solid ${props => props.theme.color.border.primary};
        box-shadow: ${props => props.theme.shadow};
        background: ${props => props.theme.color.background.secondary};
    }
    
`

const CustomMentionInput = (props) => {
    const ref = useRef()
    const containerRef = useRef()
    const {getMention} = props
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const [open, setOpen] = useState(true)
    const [suggestions, setSuggestions] = useState(props.data)
    const [mentions, setMentions] = useState([])
    const mentionLength = useRef(0)
    const {MentionSuggestions , plugins} = useMemo(() => {
        const mentionPlugin = createMentionPlugin({
            entityMutability: "IMMUTABLE", 
            mentionTrigger: "//", 
            mentionSuggestionsComponent: CalendarSuggestion
        })
        const {MentionSuggestions} = mentionPlugin
        const plugins = [mentionPlugin]
        return {MentionSuggestions, plugins}
    }, [])
   

    const onOpenChange = useCallback((open) => setOpen(open), [])
    const onSearchChange = useCallback(({value}) => setSuggestions(defaultSuggestionsFilter(value, props.data)), [props.data])

    useEffect(() => {
        let contentState = convertToRaw(editorState.getCurrentContent())
        let models = contentState.entityMap
        let data = Object.values(models).filter(_ => _.type === "//mention").map(_ => _.data.mention.name)
        console.log(data)
        if (data.length !== mentionLength.current) {
            mentionLength.current = data.length
            setMentions(data)
        }
    }, [setMentions, editorState])

    useEffect(() => {
        getMention(mentions)
    })

    return (
        <Container demo={props.demo} onClick={() => ref.current.focus()} ref={containerRef}>
            <Editor 
                editorKey="editor" 
                editorState={editorState} 
                onChange={setEditorState} 
                plugins={plugins} 
                ref={ref}
            />
            <MentionSuggestions
                inputRef={containerRef.current}
                open={open}
                onOpenChange={onOpenChange}
            />
        </Container>
    )
}

CustomMentionInput.propTypes = {
    trigger: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
    getMention: PropTypes.func,
    getPlainText: PropTypes.func
}
CustomMentionInput.defaultProps = {
    trigger: "@",
    data: [],
    getMention: (x) => {},
    getPlainText: (x) => {}
}
export default CustomMentionInput