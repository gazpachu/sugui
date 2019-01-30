The collapse component is useful when we need to expand a container when clicking on an icon or button somewhere else

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/collapse/index.jsx" target="_blank">component implementation</a>

```jsx
const { default: styled } = require('styled-components');
const Button = require('../button').default;
const initialState = { expanded: false };

const StyledButton = styled(Button)`
  margin-bottom: 20px;
`;

<div>
  <StyledButton
    color="primary"
    onClick={() => setState({ expanded: !state.expanded })}
  >
    Expand
  </StyledButton>
  <Collapse expanded={state.expanded}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
  </Collapse>
</div>
```
