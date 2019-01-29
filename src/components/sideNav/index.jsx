import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Info from '../../icons/info';
import {
  Container,
  NavScroll,
  NavItems,
  Overlay
} from './sideNav.styles';

const propTypes = {
  /**
   * The open state of the sideNav
   */
  isActive: PropTypes.bool,
  /**
   * Callback when the sideNav opens or closes
   */
  toggleNav: PropTypes.func,
  /**
   * Children to render within the sideNav
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  /**
   * App string to build the FAQs link
   */
  app: PropTypes.string
};

const defaultProps = {
  isActive: false,
  toggleNav: () => {},
  children: null,
  app: ''
};

const SideNav = props => (
  <Container active={props.isActive}>
    <NavScroll active={props.isActive}>
      <NavItems>
        <li>
          <Link to="/" onClick={() => props.toggleNav(false)}>
            <Info color="white" />Home page
          </Link>
        </li>
        <li>
          <a href={`/dashboard/faqs/${props.app}`} target="_blank" rel="noreferrer noopener"><Info color="white" />FAQs</a>
        </li>
        {props.children}
      </NavItems>
    </NavScroll>
    <Overlay
      active={props.isActive}
      onClick={() => props.toggleNav(false)}
      aria-label="overlay"
      aria-labelledby="top-nav"
    />
  </Container>
);

SideNav.propTypes = propTypes;
SideNav.defaultProps = defaultProps;

export default SideNav;
