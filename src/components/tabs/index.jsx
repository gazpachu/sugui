import React from 'react';
import PropTypes from 'prop-types';
import { TabsContainer } from './tabs.styles';

const propTypes = {
  /**
   * The index corresponding to the active tab
   */
  activeTab: PropTypes.number,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  activeTab: null,
  className: null
};

const Tabs = props => (
  <TabsContainer activeTab={props.activeTab} className={props.className}>
    {props.children}
  </TabsContainer>
);

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default Tabs;
