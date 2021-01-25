import React from "react";

import  Mention  from '../Mention/Mention';
import MentionsInput  from '../Mention/MentionsInput';

// import provideExampleValue  from "../Mention/higher-order/provideExampleValue";
import provideExampleValue from '../Mention/higher-order/provideExampleValue';

import defaultStyle from "./defaultStyle";

// use first/outer capture group to extract the full entered sequence to be replaced
// and second/inner capture group to extract search string from the match
const emailRegex = /(([^\s@]+@[^\s@]+\.[^\s@]+))$/;

const MultipleMentions =({ value, data, onChange, onAdd,width }) => {
  return (
    <MentionsInput
    value={value}
    width={width}
    onChange={onChange}
    style={defaultStyle}
    placeholder={"Mention people using '@'"}
    a11ySuggestionsListLabel={"Suggested mentions"}
  >
    <Mention
      markup="@[__display__](user:__id__)"
      trigger="@"
      data={data}
      renderSuggestion={(
        suggestion,
        search,
        highlightedDisplay,
        index,
        focused
      ) => (
        <div className={`user ${focused ? 'focused' : ''}`}>
          {highlightedDisplay}
        </div>
      )}
      onAdd={onAdd}
      style={{backgroundColor:'red'}}
    />

    <Mention
      markup="@[__display__](email:__id__)"
      trigger={emailRegex}
      data={(search) => [{ id: search, display: search }]}
      onAdd={onAdd}
      style={{ backgroundColor: '#d1c4e9' }}
    />
  </MentionsInput>
  );
}

const asExample = provideExampleValue();

export default asExample(MultipleMentions);
