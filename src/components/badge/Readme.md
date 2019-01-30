Badge generates a small circle with a number to the right of its child(ren).

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/badge/index.jsx" target="_blank">component implementation</a>

<style>
  .items { list-style-type: none; padding: 0; }
  .items li { margin-right: 10px; display: inline-block; }
  .items li:last-child { margin-right: 0; }
</style>

```jsx
<ul className="items">
  <li><Badge bg="primary" content={4}>Item One</Badge></li>
  <li><Badge bg="secondary" content={8} size={30}>Item Two</Badge></li>
  <li><Badge bg="green" content={2} size={40}>Item Three</Badge></li>
</ul>
```
