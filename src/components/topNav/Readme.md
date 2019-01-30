The top navigation component is a sticky bar that sits at the top of every app. It contains a logo and other buttons to access relevant functionality, like the side navigation, logout links, etc.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/tree/master/src/components/topNav/index.jsx" target="_blank">component implementation</a>

```jsx
const { default: styled, css } = require('styled-components');
const Overlay = require('../overlay').default;
const SuguiLogo = require('../../logos/suguiLogo').default;
const SuguiSymbol = require('../../logos/suguiSymbol').default;

const initialState = { overlayOpened: null };

const StyledLogo = styled(SuguiLogo)`
  padding: 7px;
`;

const StyledSymbol = styled(SuguiSymbol)`
  padding: 7px;
`;

const StyledTopNav = styled(TopNav)`
  position: initial;
  ${props => props.withMargin && css`margin-top: 80px`};
`;

<div>
  <StyledTopNav
    logo={<StyledLogo />}
    symbol={<StyledSymbol />}
    isActive={false}
    header={{ name: 'T G' }}
    toggleNav={() => {}}
    toggleSearch={() => setState({ overlayOpened: true })}
  />
  <StyledTopNav
    withMargin // just for the example
    logo={<StyledLogo color="white" />}
    symbol={<StyledSymbol color="white" />}
    bg="secondary"
    color="white"
    isActive={false}
    header={{ name: 'Y B' }}
    toggleNav={() => {}}
    toggleSearch={() => setState({ overlayOpened: true })}
  />
  <StyledTopNav
    withMargin // just for the example
    logo={<StyledLogo color="white" />}
    symbol={<StyledSymbol color="white" />}
    bg="aubergine"
    color="white"
    isActive={false}
    header={{ name: 'Y B' }}
    toggleNav={() => {}}
    toggleSearch={() => setState({ overlayOpened: true })}
  />
  <Overlay
    open={state.overlayOpened}
    heading="Search"
    onClose={() => setState({ overlayOpened: false })}
    topOffset={0}
  >
    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'white' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, sapien id euismod suscipit, felis massa gravida lorem, a lacinia ipsum ipsum a neque. Cras nec pulvinar ligula. Pellentesque sollicitudin, nibh non ultricies ultrices, nulla eros tristique ligula, quis bibendum metus quam congue diam. Aenean tincidunt, purus eu mattis aliquam, mauris elit rhoncus lectus, at venenatis diam urna at turpis. Nam tempor, nisl et dignissim finibus, leo diam scelerisque est, eget rutrum risus sapien quis massa. Praesent condimentum ex vitae tincidunt eleifend. Nunc vehicula tellus ut nisi laoreet vulputate. Fusce luctus dui eu scelerisque euismod. Quisque aliquet lorem egestas elit faucibus commodo. In dictum at lectus ac auctor.</p>
  </Overlay>
</div>
```
