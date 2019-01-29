The Select component displays a select box.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/select/index.jsx" target="_blank">component implementation</a>

<style>
  .selects {
    padding: 20px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
</style>

```jsx
const theme = require('../theme/settings.js').default;
const SearchIcon = require('../../icons/search').default;

const initialState = {
  color: 'porcelain',
  bgColor: '#F4F4F4',
  darkBg: false,
  items: [{ val: 1, label: 'one' }, { val: 2, label: 'two', selected: true }, { val: 3, label: 'three' }],
  items2: [{ val: 1, label: 'one' }, { val: 2, label: 'two' }, { val: 3, label: 'three' },
          { val: 4, label: 'four' }, { val: 5, label: 'five' }, { val: 6, label: 'six' },
          { val: 7, label: 'seven' }, { val: 8, label: 'eight' }, { val: 9, label: 'nine' }]
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

  <div className="selects" style={{ backgroundColor: state.bgColor }}>
    <Select label="Without overflow" inputProps={{ placeholder: 'Select an item' }} color={state.color} items={state.items} darkBg={state.darkBg} />
    <Select label="With overflow" inputProps={{ placeholder: 'Select an item' }} color={state.color} items={state.items2} darkBg={state.darkBg} />
    <Select label="With overflow" inputProps={{ placeholder: 'Select an item' }} assistiveText="With assistive text" color={state.color} items={state.items2} darkBg={state.darkBg} />
    <Select label="Not valid" inputProps={{ placeholder: 'Select an item', required: true }} items={state.items} isValid={false} assistiveText="Please, select an item" darkBg={state.darkBg} />
    <Select label="Valid" inputProps={{ placeholder: 'Select an item', required: true }} items={state.items} isValid assistiveText="Correct entry" darkBg={state.darkBg} />
    <Select label="With icon" inputProps={{ placeholder: 'With an icon' }} icon={<SearchIcon />} color={state.color} items={state.items2} darkBg={state.darkBg} />
  </div>
  <div className="selects" style={{ backgroundColor: state.bgColor }}>
    <Select inputProps={{ placeholder: 'Without label' }} color={state.color} items={state.items2} darkBg={state.darkBg} />
  </div>
</div>
```
