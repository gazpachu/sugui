The radiobutton component allows the user to enable or disable options.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/radiobutton/index.jsx" target="_blank">component implementation</a>

<style>
  .items { list-style-type: none; padding: 0; }
  .items li { margin-right: 10px; display: inline-block; }
  .items li:last-child { margin-right: 0; }
</style>

```jsx
<ul className="items">
  <li><Radiobutton color="primary">Item One</Radiobutton></li>
  <li><Radiobutton color="aubergine" checked>Item Two</Radiobutton></li>
  <li><Radiobutton color="digitalGreen" checked>Item Three</Radiobutton></li>
  <li><Radiobutton color="digitalGreen" checked disabled>Disabled checked</Radiobutton></li>
  <li><Radiobutton color="primary" disabled>Disabled</Radiobutton></li>
</ul>
```
