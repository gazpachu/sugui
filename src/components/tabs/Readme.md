The Tabs component is useful when we need to display different content in the same page and at the same level.

There is a subcomponent called `Tab`, which takes an `activeTab` boolean prop to indicate weather is active or not.

It works together with the `react-swipeable-views` module, which is used to slide portions of content from left to right.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/tabs/index.jsx" target="_blank">component implementation</a>

```jsx
const Tab = require('./_tab').default;
const SwipeableViews = require('react-swipeable-views').default;
initialState = { activeTab: 0 }
;<div>
  <Tabs activeTab={state.activeTab}>
    <Tab active={state.activeTab === 0} onClick={() => setState({ activeTab: 0 })}>Tab 1</Tab>
    <Tab active={state.activeTab === 1} onClick={() => setState({ activeTab: 1 })}>Tab 2</Tab>
  </Tabs>
  <SwipeableViews
    style={{ marginTop: '20px' }}
    axis="x"
    index={state.activeTab}
    onChangeIndex={index => setState({ activeTab: index })}
  >
    <div>
      <p>First tab content</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
    </div>
    <div>
      <p>Second tab content</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
    </div>
  </SwipeableViews>
</div>
```
