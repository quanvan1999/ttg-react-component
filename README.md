Component Documentation
===========
### 1. `<Button/>`   *Styled button*
#### Props:
Name|Type|Default|Description
---|---|---|---
`type`|`"contained"/"outline"/"text"`|`"contained"`|The appearance of button
`demo`|`bool`|`false`|Only use for testing purpose, it will set the margin by 8px
`size`|`"small"/"medium"/"large"`|`medium`| Specifies the size in type
#### Examples:
`<Button name="example 1" type="outline">Outline Button</Button>`  
`<Button name="example 1" demo>Demo Button</Button>` 
`<Button name="example 1" size="small">Small Button </Button>` 
### 2. `<ButtonGroup/>` *Group of buttons*
#### Props:
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Button group will take the whole width if true, else it will be inline
`onSelect={x => setMode(x)}>`|`function`|`edit`|Function to handle set mode of ThemeProvider
`displayMode`|`mode`|`none`| Apply mode to group
`onSelect={x => setTheme(x)}>`|`function`|`light`|Function to handle set color of ThemeProvider
#### Examples:
`<ButtonGroup name="example 1" fullWidth></ButtonGroup>`
`<ButtonGroup name="example 1" fullWidth onSelect={x => setMode(x)></ButtonGroup`
`<ButtonGroup name="example 1" fullWidth onSelect={x => setTheme(x)></ButtonGroup`
`<ButtonGroup name="example 1" displayMode={mode}></ButtonGroup>`
### 3. `<Radio/>` *Styled radio*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of radio
`value`|`string`|`none`|Value of radio
`default`|`bool`|`false`| Specifies should be pre-selected when the page loads
#### Example:
`<Radio value="1" name="example 1" default>Auto checked</Radio>`
### 4.`<RadioButtoGroup/>` *Group of Radio*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Radio will take the whole width if true, else it will be inline
`horizontal`|`bool`|`false`|Field that will display direction of radio (row or column)
#### Example:
`<RadioButtonGroup name="example 1" fullWidth ></RadioButtonGroup>`
`<RadioButtonGroup name="example 2" horizontal ></RadioButtonGroup>`
### 5. `<Checkbox/>` *Styled checkbox*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of checkbox
`value`|`string`|`none`|Value of checkbox
`default`|`bool`|`false`| Specifies should be pre-selected when the page loads
#### Example:
`<Checkbox value="1" name="example 1" default>Auto checked</Checkbox>`
### 6.`<CheckboxGroup/>` *Group of Checkbox*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Checkbox will take the whole width if true, else it will be inline
`horizontal`|`true/false`|`false`|Field that will display direction of checkbox (row or column)
#### Example:
`<CheckboxGroup name="example 1" horizontal ></CheckboxGroup>`
`<CheckboxGroup name="example 1" fullWidth ></CheckboxGroup>`
### 7. `<Toggle/>` *Styled Toggle*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Toggle
`value`|`string`|`none`|Value of Toggle
`default`|`bool`|`false`|Specifies should be pre-selected when the page loads
#### Example:
`<Toggle value="1" name="example 1" default>Auto checked</Toggle>`
### 8.`<ToggleGroup/>` *Group of Toggle*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Group
`fullWidth`|`bool`|`false`|Toggle will take the whole width if true, else it will be inline
`horizontal`|`bool`|`false`|Field that will display direction of Toggle (row or column)
=#### Example:
`<ToggleGroup name="example 1" horizontal ></ToggleGroup>`
`<ToggleGroup name="example 1" fullWidth ></ToggleGroup>`
### 9.`<SimpleInput/>` *Styte Input*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Input
`placeholder`|`string`|`none`|Specifies a short hint that describes the expected value
`fullWidth`|`bool`|`false`|Input will take the whole width if true, else it will be inline
#### Example:
`<SimpleInput name="group 1" horizontal ></SimpleInput>`
`<SimpleInput name="group 1" placeholder="Hello" ></SimpleInput>`
`<SimpleInput name="group 1" fullWidth ></SimpleInput>`
### 10.`<Slider/>` *Styte slider*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Slider
`fullWidth`|`bool`|`false`|Silder will take the whole width if true, else it will be inline
#### Example:
`<Slider name="example 1" fullWidth ></Slider>`
### 10.`<Breadcrumb/>` *Styte breadcrumb*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Breadcrumb
#### Example:
`<Breadcrumb name="example 1" ></Breadcrumb>`
### 11.`<Link/>` *Styte link*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Link
`href`|`string`|`none`|URL of Link
#### Example:
`<Link name="example 1" href="google.com.vn" >Google</Link>`
### 12.`<Modal/>` *Styte modal*
#### Props
Name|Type|Default|Description
---|---|---|---
`name`|`string`|`none`|Name of Modal
`title`|`string`|`none`|Title of Modal
#### Example:
