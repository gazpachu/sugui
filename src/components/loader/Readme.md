The Loader component displays a full-screen overlay with a circle loading animation. It can be used when the app needs to block any interaction from the user in the page, i.e. during a page transition into another page.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/loader/index.jsx" target="_blank">component implementation</a>

```jsx
const Button = require('../button').default;
initialState = { open: false }
;<div>
  <Button
    color="primary"
    onClick={() => setState({ open: !state.open })}
  >
    Open loader
  </Button>
  <Loader isLoading={state.open} noTopNav onClose={() => setState({ open: false })} />
</div>
```
