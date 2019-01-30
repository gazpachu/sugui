A dialog is a modal window with a full screen overlay at the back. It is useful when we need the user to perform a task within the context of a page. It usually contains a cancel and a submit button.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/dialog/index.jsx" target="_blank">component implementation</a>

```jsx
const { default: styled, css } = require('styled-components');
const SubmitButton = require('../button/_submitButton').default;
const Button = require('../button').default;

const StyledButton = styled(Button)`
  margin-right: 10px;
  display: inline-block;
`;

const StyledSubmitButton = styled(SubmitButton)`
  display: inline-block;
`;

initialState = { open: null, loading: false }
;<div>
  <Button
    color="primary"
    onClick={() => setState({ open: true })}
  >
    Open dialog
  </Button>
  <Dialog
    open={state.open}
    heading="Bring an employee into the team"
    topOffset={0}
  >
    <p style={{ maxWidth: '400px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
    <StyledButton color="secondary" onClick={() => setState({ open: false, loading: false })}>Cancel</StyledButton>
    <StyledSubmitButton color="primary" loading={state.loading} onClick={() => setState({ loading: true })}>Submit</StyledSubmitButton>
  </Dialog>
</div>
```
