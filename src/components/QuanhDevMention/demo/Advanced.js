import React from 'react'
import { compose, withHandlers } from 'recompose'

import { MentionsInput, Mention } from '..'

import { provideExampleValue } from './higher-order'

import defaultStyle from './defaultStyle'
import defaultMentionStyle from './defaultMentionStyle'

import { merge } from '../utils'

const style = merge({}, defaultStyle, {
  suggestions: {
    list: {
      maxHeight: 100,
      overflow: 'auto',
      position: 'absolute',
      bottom: 14,
    },
  },
})

function Advanced({ value, data, onChange, onBlur, onAdd }) {
  let inputEl = React.createRef()
  return (
    <div className="advanced">
      <h3>Advanced options</h3>

      <MentionsInput
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={style}
        inputRef={inputEl}
        a11ySuggestionsListLabel={"Suggested mentions"}
      >
        <Mention
          markup="{{__id__}}"
          displayTransform={id => `<-- ${id} -->`}
          data={data}
          onAdd={onAdd}
          style={defaultMentionStyle}
        />
      </MentionsInput>

      <button
        onClick={() => {
          inputEl.current.focus()
        }}
      >
        focus programmatically
      </button>
    </div>
  )
}

export default compose(
  provideExampleValue('Hi {{johndoe}}!'),
  withHandlers({
    onBlur: () => (ev, clickedOnSuggestion) => {
      if (!clickedOnSuggestion) {
        console.log('finished editing')
      }
    },
  })
)(Advanced)
