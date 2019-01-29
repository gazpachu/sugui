A small loading spinner to use when the app is fetching data from the API.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/circularProgress/index.jsx" target="_blank">component implementation</a>

```jsx
const theme = require('../theme/settings.js').default;

const initialState = {
  color: 'abbey',
  bgColor: 'white',
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
    <select onChange={(event) => setState({ color: event.currentTarget.value })} style={{ marginRight: '15px' }}>
      {Colors}
    </select>
    <span style={{ marginRight: '5px' }}>Background color</span>
    <select defaultValue={state.color} onChange={(event) => setState({ bgColor: event.currentTarget.value, darkBg: event.currentTarget.value === '#333' })}>
      <option value="white">White</option>
      <option value="#333">Dark</option>
    </select>
  </p>

  <div style={{ padding: '20px', backgroundColor: state.bgColor }}>
    <ul className="items">
      <li><CircularProgress color={state.color} label="Loading stuff..." darkBg={state.darkBg} /></li>
      <li><CircularProgress color={state.color} darkBg={state.darkBg} /></li>
      <li><CircularProgress color={state.color} label="Loading stuff..." labelPos="left" darkBg={state.darkBg} /></li>
    </ul>
  </div>
</div>
```
