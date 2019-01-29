The Switch component is used to enable/disable settings.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/switch/index.jsx" target="_blank">component implementation</a>

```jsx
const { default: styled } = require('styled-components');

const StyledSwitch = styled(Switch)`
  margin-left: 20px;
`;

<div>
  <Switch bg="digitalGreen" />
  <StyledSwitch disabled />
  <StyledSwitch defaultChecked />
  <StyledSwitch bg="freshOrange" defaultChecked />
</div>
```