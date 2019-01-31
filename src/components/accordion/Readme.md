An accordion is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/accordion/index.jsx" target="_blank">component implementation</a>

```jsx
const { default: styled } = require('styled-components');
const CircularProgress = require('../circularProgress').default;
const Button = require('../button').default;

const StyledCircularProgress = styled(CircularProgress)`
  display: inline-block;
`;

const StyledButton = styled(Button)`
  display: inline-block;
  margin-left: 10px;
`;

const initialState = {
  change: false,
  loading: true,
  dummyContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.'
};
<div>
  <Accordion title="Async content & opened by default" openByDefault>
    {state.loading
      ? <div>
          <StyledCircularProgress />
          <StyledButton onClick={() => setState({ loading: false })}>Load data</StyledButton>
        </div>
      : <p>{state.dummyContent}</p>}
  </Accordion>
  <Accordion title="Dynamic content">
    {state.change
      ? <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
      : <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam.</p>
    }
    {!state.change ? <Button onClick={() => setState({ change: !state.change })}>Change content</Button> : null}
  </Accordion>
  <Accordion title="Static content">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
    <p>Nunc arcu nibh, rhoncus vitae erat sit amet, malesuada rutrum massa. Etiam ultricies, ligula vitae lobortis sodales, magna eros vestibulum sapien, ut malesuada odio sapien in massa. Phasellus suscipit lectus eget urna placerat aliquam. Vestibulum ut ligula vitae elit congue convallis ac a nibh. Nullam a luctus dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed sollicitudin enim, et commodo libero. Cras sed nisl quis lacus pharetra ullamcorper a vel dolor. Suspendisse commodo sapien in ante accumsan, a varius lacus fermentum. Aliquam at vestibulum lorem. Maecenas a urna ac lorem facilisis facilisis. Nunc et ex eget sem efficitur suscipit. Cras nec nunc pharetra, lobortis erat in, volutpat neque. Curabitur sit amet nisl eu ligula malesuada faucibus quis ut risus. Proin eleifend massa eget enim viverra lacinia. Phasellus eget tortor quam.</p>
  </Accordion>
  <Accordion title="Custom arrow color" color="primary">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
    <p>Nunc arcu nibh, rhoncus vitae erat sit amet, malesuada rutrum massa. Etiam ultricies, ligula vitae lobortis sodales, magna eros vestibulum sapien, ut malesuada odio sapien in massa. Phasellus suscipit lectus eget urna placerat aliquam. Vestibulum ut ligula vitae elit congue convallis ac a nibh. Nullam a luctus dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sed sollicitudin enim, et commodo libero. Cras sed nisl quis lacus pharetra ullamcorper a vel dolor. Suspendisse commodo sapien in ante accumsan, a varius lacus fermentum. Aliquam at vestibulum lorem. Maecenas a urna ac lorem facilisis facilisis. Nunc et ex eget sem efficitur suscipit. Cras nec nunc pharetra, lobortis erat in, volutpat neque. Curabitur sit amet nisl eu ligula malesuada faucibus quis ut risus. Proin eleifend massa eget enim viverra lacinia. Phasellus eget tortor quam.</p>
  </Accordion>
</div>
```
