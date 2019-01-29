The top navigation component is a sticky bar that sits at the top of every app. It contains a logo and other buttons to access relevant functionality, like the side navigation, logout links, etc.

For more info, please refer to the <a href="https://github.com/gazpachu/sugui/src/components/topNav/index.jsx" target="_blank">component implementation</a>

```jsx
const { default: styled, css } = require('styled-components');
const Overlay = require('../overlay').default;
const BonsaiLogo = require('../../logos/bonsaiLogo').default;
const BonsaiSymbol = require('../../logos/bonsaiSymbol').default;
const FitbidLogo = require('../../logos/fitbidLogo').default;
const FitbidSymbol = require('../../logos/fitbidSymbol').default;

const initialState = { overlayOpened: null };

const StyledTopNav = styled(TopNav)`
  position: initial;
  ${props => props.withMargin && css`margin-top: 120px`};
`;

<div>
  <StyledTopNav
    logo={<BonsaiLogo />}
    symbol={<BonsaiSymbol />}
    isActive={false}
    header={{ name: 'T G' }}
    toggleNav={() => {}}
    toggleSearch={() => setState({ overlayOpened: true })}
  />
  <StyledTopNav
    withMargin // just for the example
    logo={<FitbidLogo />}
    symbol={<FitbidSymbol />}
    bg="secondary"
    color="white"
    isActive={false}
    header={{ name: 'Y B' }}
    toggleNav={() => {}}
    toggleSearch={() => setState({ overlayOpened: true })}
  />
  <StyledTopNav
    withMargin // just for the example
    logo={<FitbidLogo />}
    symbol={<FitbidSymbol />}
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
