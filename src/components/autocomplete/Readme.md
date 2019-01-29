The AutoComplete component is similar to a dropdown select box. The difference is that, due to the amount of options, the search is done by typing letters in the input. By default, the user needs to enter 3 letters to trigger the search.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/autocomplete/index.jsx" target="_blank">component implementation</a>

```jsx
const initialState = { data: [{
    id: 'peter.pan@domain.com',
    label: 'Peter Pan'
  }, {
    id: 'ai.weiwei@domain.com',
    label: 'Ai Weiwei'
  }, {
    id: 'rafael.nadal@domain.com',
    label: 'Rafael Nadal'
  }]};
<div>
  <div style={{ backgroundColor: '#FAFAFA', padding: '30px' }}>
    <AutoComplete
      data={state.data}
      placeholder="Search employees"
    />
  </div>
  <div style={{ backgroundColor: '#555', padding: '30px' }}>
    <AutoComplete
      data={state.data}
      placeholder="Search impersonations"
      color="white"
      search={(val) => new Promise((resolve, reject) => resolve(state.data))}
    />
  </div>
  <div style={{ backgroundColor: '#5E2750', padding: '30px' }}>
    <AutoComplete
      data={state.data}
      placeholder="Search countries"
      color="white"
      search={(val) => new Promise((resolve, reject) => resolve(state.data))}
    />
  </div>
</div>
```
