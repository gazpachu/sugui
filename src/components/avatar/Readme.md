Avatars are found in every app. We use them to represent users. If a user profile image is not provider, it would default to their name initials

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/avatar/index.jsx" target="_blank">component implementation</a>

<style>
  .items { list-style-type: none; padding: 0; }
  .items li { margin-right: 10px; display: inline-block; }
  .items li:last-child { margin-right: 0; }
</style>

```jsx
<ul className="items">
  <li><Avatar name="Error Found" size="small" /></li>
  <li><Avatar name="Test User" forceRandom size="medium" /></li>
  <li><Avatar name="Test User" bg="white" size="large" /></li>
  <li><Avatar name="Rob Padley" size="large" url="http://i.pravatar.cc/60" /></li>
  <li><Avatar name="Rob Padley" bg="aubergine" size="xlarge" /></li>
</ul>
```
