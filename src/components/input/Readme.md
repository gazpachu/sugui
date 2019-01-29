The Input component allows the user to enter characters

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/input/index.jsx" target="_blank">component implementation</a>

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
  bgColor: '#F4F4F4'
};

const Colors = Object.keys(theme.colors).map(color => {
  return (
    <option defaultValue={theme.colors[color]} key={color}>{color}</option>
  )
});

const { default: styled } = require('styled-components');

const StyledInput = styled(Input)`
  display: inline-block;
  width: 200px;
`;

const StyledButton = styled(Button)`
  display: inline-block;
  margin-left: 10px;
  margin-right: 20px;
`;

<div>
  <p>
    <span style={{ marginRight: '5px' }}>Color</span>
    <select defaultValue={state.color} onChange={(event) => setState({ color: event.currentTarget.value })} style={{ marginRight: '15px' }}>
      {Colors}
    </select>
    <span style={{ marginRight: '5px' }}>Background color</span>
    <select onChange={(event) => setState({ bgColor: event.currentTarget.value })}>
      <option value="#F4F4F4">Light</option>
      <option value="#333">Dark</option>
    </select>
  </p>

  <div className="inputs" style={{ backgroundColor: state.bgColor }}>
    <Input inputProps={{ placeholder: 'Field without label' }} color={state.color} icon={<SearchIcon />} iconPos="right" />
    <Input inputProps={{ placeholder: 'Disabled field', disabled: true }} color={state.color} icon={<SearchIcon />} iconPos="right" />
    <Input inputProps={{ placeholder: 'Optional placeholder text' }} color={state.color} icon={<SearchIcon />} iconPos="right" />
    <Input inputProps={{ type: 'number', placeholder: 'Type number' }} color={state.color} icon={<EditIcon />} iconPos="left" />
    <Input inputProps={{ type: 'password', defaultValue: 'password', placeholder: 'Optional placeholder text' }} color={state.color} icon={<LockedIcon />} iconPos="right" />
    <Input inputProps={{ type: 'email', defaultValue: 'first.last@domain.com', placeholder: 'Another placeholder' }} color={state.color} icon={<MailIcon />} iconPos="right" />
    <Input inputProps={{ type: 'date' }} color={state.color} icon={<CalendarIcon />} iconPos="right" />
    <Input multiline color={state.color} inputProps={{ defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem' }} />
  </div>

  <div style={{ backgroundColor: state.bgColor, padding: '20px' }}>
    <StyledInput inputProps={{ placeholder: 'Default field size' }} color={state.color} icon={<SearchIcon />} iconPos="right" />
    <StyledButton size="large">Large button</StyledButton>
    <StyledInput inputProps={{ placeholder: 'Small field size' }} color={state.color} icon={<SearchIcon />} iconPos="right" size="small" />
    <StyledButton>Default button</StyledButton>
  </div>
</div>
```
