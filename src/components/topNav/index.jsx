import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../avatar';
import {
  Container,
  NavButton,
  StyledLink,
  Logo,
  Symbol,
  RightContainer,
  Dropdown,
  UserMenu,
  MenuItem,
  Button,
  StyledLogoutIcon,
  SearchButton,
  StyledSearchIcon
} from './topNav.styles';
import Helpers from '../theme/helpers';
import Theme from '../theme/settings';

const propTypes = {
  /**
   * Indicates if the hamburguer menu is active or not
   */
  isActive: PropTypes.bool,
  /**
   * Callback when the search button is clicked
   */
  toggleSearch: PropTypes.func,
  /**
   * Callback when the hamburguer button is clicked
   */
  toggleNav: PropTypes.func,
  /**
   * Background colour
   */
  bg: PropTypes.string,
  /**
   * Foreground colour (for texts and icons)
   */
  color: PropTypes.string,
  /**
   * The content to render within the top nav
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * Header object with user details
   */
  header: PropTypes.shape({
    name: PropTypes.string,
    username: PropTypes.string,
    avatarUrl: PropTypes.string
  }),
  /**
   * App logo icon component
   */
  logo: PropTypes.node,
  /**
   * App symbol icon component
   */
  symbol: PropTypes.node,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  isActive: false,
  toggleSearch: null,
  toggleNav: null,
  bg: 'white',
  color: Theme.colors.mineShaft,
  children: null,
  header: {
    username: 'Test User',
    name: 'Test User',
    avatarUrl: ''
  },
  logo: null,
  symbol: null,
  className: null
};

class TopNav extends Component {
  componentDidMount() {
    document.addEventListener('keydown', evt => Helpers.handleEscKey(evt, () => this.props.toggleNav(false)), false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', evt => Helpers.handleEscKey(evt, () => this.props.toggleNav(false)));
  }

  render() {
    const {
      isActive,
      toggleSearch,
      toggleNav,
      bg,
      color,
      children,
      header,
      logo,
      symbol,
      className
    } = this.props;

    return (
      <Container bg={bg} className={className}>
        {toggleNav ?
          <NavButton
            active={isActive}
            onClick={() => toggleNav(!isActive)}
            aria-label="toggle nav"
            aria-labelledby="top-nav"
            title="Main navigation"
            color={color}
          >
            <span />
            <span />
            <span />
            <span />
          </NavButton>
        : null}

        {logo ?
          <StyledLink to="/" title="Go to the Home page">
            <Logo>{logo}</Logo>
            <Symbol>{symbol}</Symbol>
          </StyledLink>
        : null}

        {children}

        <RightContainer>
          {toggleSearch ?
            <SearchButton onClick={() => toggleSearch()}>
              <StyledSearchIcon color={color} />
            </SearchButton>
          : null}

          {header ?
            <Dropdown>
              <Avatar name={header.username || header.name} url={header.avatarUrl} forceRandom size="medium" />
              <UserMenu bg={bg}>
                <MenuItem bg={bg}>
                  <Button href={header.logoutUrl} color={color}>
                    <StyledLogoutIcon color={color} />Logout
                  </Button>
                </MenuItem>
              </UserMenu>
            </Dropdown>
          : null}
        </RightContainer>
      </Container>
    );
  }
}

TopNav.propTypes = propTypes;
TopNav.defaultProps = defaultProps;

export default TopNav;
