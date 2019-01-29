Buttons allow users to take actions, and make choices, with a single tap.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/button/index.jsx" target="_blank">button</a> and the <a href="https://github.com/gazpachu/sugui/src/components/button/_submitButton.jsx" target="_blank">submitButton</a>component implementations

<style>
  .items { list-style-type: none; padding: 0; }
  .items li { margin: 0 10px 10px 0; display: inline-block; vertical-align: middle; }
  .items li:last-child { margin-right: 0; }
</style>

```jsx
const theme = require('../theme/settings.js').default;
const SubmitButton = require('./_submitButton').default;
const AddIcon = require('../../icons/add').default;
const EditIcon = require('../../icons/edit').default;
const HomeIcon = require('../../icons/home').default;
const DeleteIcon = require('../../icons/delete').default;

const initialState = {
  color: 'red',
  variant: 'contained',
  size: 'medium',
  loading: false,
  bgColor: 'white',
  darkBg: false
};

const Colors = Object.keys(theme.colors).map(color => {
  if (color.includes('primary') || color.includes('secondary') || color.includes('Lighter') || color.includes('black') || color.includes('white')) return;
  return (
    <option defaultValue={theme.colors[color]} key={color}>{color}</option>
  )
});

const descriptions = {
  contained: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
  outlined: 'Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app. Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.',
  text: 'Text buttons are typically used for less-pronounced actions. In cards, text buttons help maintain an emphasis on card content.',
  fab: 'A Floating Action Button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center. FABs come in three types: regular, mini, and extended. Only use a FAB if it is the most suitable way to present a screen’s primary action.'
};

<div>
  <p>
    <span style={{ marginRight: '5px' }}>Primary color</span>
    <select defaultValue={state.color} onChange={(event) => setState({ color: event.currentTarget.value })} style={{ marginRight: '15px' }}>
      {Colors}
    </select>
    <span style={{ marginRight: '5px' }}>Variant</span>
    <select onChange={(event) => setState({ variant: event.currentTarget.value })} style={{ marginRight: '15px' }}>
        <option value="contained">contained</option>
        <option value="outlined">outlined</option>
        <option value="text">text</option>
        <option value="fab">fab</option>
    </select>
    <span style={{ marginRight: '5px' }}>Size</span>
    <select onChange={(event) => setState({ size: event.currentTarget.value })} style={{ marginRight: '15px' }}>
      <option value="medium">medium</option>
      <option value="small">small</option>
      <option value="large">large</option>
    </select>
    <span style={{ marginRight: '5px' }}>Background color</span>
    <select onChange={(event) => setState({ bgColor: event.currentTarget.value, darkBg: event.currentTarget.value === '#333333' })} style={{ marginRight: '15px' }}>
      <option value="#FFFFFF">White</option>
      <option value="#FAFAFA">Light grey</option>
      <option value="#333333">Dark grey</option>
    </select>
    <a href={`https://webaim.org/resources/contrastchecker/?fcolor=FFFFFF&bcolor=${theme.colors[state.color].substring(1)}`} target="_blank">Contrast</a>
  </p>
  <p>{descriptions[state.variant]}</p>
  <div style={{ backgroundColor: state.bgColor, padding: '10px' }}>
    <ul className="items">
      <li><Button variant={state.variant} darkBg={state.darkBg} size={state.size}>Default</Button></li>
      <li><Button variant={state.variant} color={state.color} darkBg={state.darkBg} size={state.size}><AddIcon />Primary</Button></li>
      <li><Button variant={state.variant} color="secondary" darkBg={state.darkBg} size={state.size} iconPos="right">Secondary<EditIcon /></Button></li>
      <li><Button variant={state.variant} disabled darkBg={state.darkBg} size={state.size}>Disabled</Button></li>
      <li><a href="#contained-buttons" className="button"><Button variant={state.variant} color={state.color} darkBg={state.darkBg} size={state.size}><HomeIcon />Link</Button></a></li>
      <li><Button variant={state.variant} color={state.color} darkBg={state.darkBg} size={state.size} iconPos="center"><DeleteIcon /></Button></li>
      <li><SubmitButton variant={state.variant} color={state.color} loading={state.loading} darkBg={state.darkBg} size={state.size} onClick={() => setState({ loading: true })}>
        Submit
      </SubmitButton></li>
    </ul>
    <Button variant={state.variant} color={state.color} size={state.size} liquid>Liquid</Button>
  </div>
</div>
```
