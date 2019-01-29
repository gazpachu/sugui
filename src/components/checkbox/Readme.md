The checkbox component allows the user to enable or disable options.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/checkbox/index.jsx" target="_blank">component implementation</a>

<style>
  .items { list-style-type: none; padding: 0; }
  .items li { margin-right: 10px; display: inline-block; }
  .items li:last-child { margin-right: 0; }
</style>

```jsx
<ul className="items">
  <li><Checkbox color="primary">Item One</Checkbox></li>
  <li><Checkbox color="aubergine" checked>Item Two</Checkbox></li>
  <li><Checkbox color="digitalGreen" checked>Item Three</Checkbox></li>
  <li><Checkbox color="digitalGreen" checked disabled>Disabled checked</Checkbox></li>
  <li><Checkbox color="primary" disabled>Disabled</Checkbox></li>
</ul>
```
