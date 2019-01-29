The Textfield component adds labels, assistive text and validation to other form elements like inputs or select boxes

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/textfield/index.jsx" target="_blank">component implementation</a>

<style>
  .inputs {
    padding: 20px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
</style>

```jsx
const theme = require('../theme/settings.js').default;
const SearchIcon = require('../../icons/search').default;
const EditIcon = require('../../icons/edit').default;
const LockedIcon = require('../../icons/locked').default;
const MailIcon = require('../../icons/mail').default;
const CalendarIcon = require('../../icons/calendar').default;

const initialState = {
  color: 'porcelain',
  bgColor: '#F4F4F4',
  darkBg: false
};

const Colors = Object.keys(theme.colors).map(color => {
  return (
    <option defaultValue={theme.colors[color]} key={color}>{color}</option>
  )
});

<div>
  <p>
    <span style={{ marginRight: '5px' }}>Color</span>
    <select defaultValue={state.color} onChange={(event) => setState({ color: event.currentTarget.value })} style={{ marginRight: '15px' }}>
      {Colors}
    </select>
    <span style={{ marginRight: '5px' }}>Background color</span>
    <select onChange={(event) => setState({ bgColor: event.currentTarget.value, darkBg: event.currentTarget.value === '#333' })}>
      <option value="#F4F4F4">Light</option>
      <option value="#333">Dark</option>
    </select>
  </p>

  <div className="inputs" style={{ backgroundColor: state.bgColor }}>
    <TextField inputProps={{ placeholder: 'Optional placeholder text' }} color={state.color} label="Text field" icon={<SearchIcon />} iconPos="right" darkBg={state.darkBg} />
    <TextField inputProps={{ type: 'number', placeholder: 'Type number' }} color={state.color} label="Number field" icon={<EditIcon />} iconPos="left" darkBg={state.darkBg} />
    <TextField inputProps={{ type: 'password', defaultValue: 'password', placeholder: 'Optional placeholder text' }} color={state.color} label="Password field" icon={<LockedIcon />} iconPos="right" darkBg={state.darkBg} />
    <TextField inputProps={{ type: 'email', defaultValue: 'first.last@domain.com', placeholder: 'Another placeholder' }} label="Email field" color={state.color} icon={<MailIcon />} iconPos="right" darkBg={state.darkBg} />
    <TextField inputProps={{ type: 'date' }} label="Date Field" color={state.color} icon={<CalendarIcon />} iconPos="right" darkBg={state.darkBg} />
    <TextField label="Required Field" required color={state.color} inputProps={{ placeholder: 'required field' }} darkBg={state.darkBg} />
    <TextField inputProps={{ placeholder: 'Optional placeholder text' }} required color={state.color} label="Text field" assistiveText="Neutral assistive text" darkBg={state.darkBg} />
    <TextField inputProps={{ placeholder: 'Optional placeholder text' }} required label="Text field" assistiveText="Error message" isValid={false} darkBg={state.darkBg} />
    <TextField inputProps={{ placeholder: 'Optional placeholder text' }} required label="Text field" assistiveText="Correct entry" isValid darkBg={state.darkBg} />
  </div>
</div>
```
