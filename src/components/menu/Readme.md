The Menu component creates a contextual floating list of items. It closes automatically when clicking on an item or outside the list.

The anchor elements needs to have `position: relative`.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/menu/index.jsx" target="_blank">component implementation</a>

```jsx
initialState = { anchorEl: null }
;<div style={{ position: 'relative', width: '100px' }}>
  <Button
    color="primary"
    onClick={(event) => {
      event.preventDefault();
      setState({ anchorEl: event.currentTarget });
    }}
  >
    Open Menu
  </Button>
  <Menu
    anchorEl={state.anchorEl}
    open={Boolean(state.anchorEl)}
    onClose={(event) => {
      event.preventDefault();
      setState({ anchorEl: null });
    }}
  >
    <li onClick={() => { setState({ anchorEl: null }); }}>Clone</li>
    <li onClick={() => { setState({ anchorEl: null }); }}>Remove</li>
  </Menu>
</div>
```
