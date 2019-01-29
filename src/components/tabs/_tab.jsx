import React from 'react';
import PropTypes from 'prop-types';
import { TabContainer } from './tabs.styles';

const propTypes = {
  /**
   * It indicates weather the tab should be active or not
   */
  active: PropTypes.bool.isRequired,
  /**
   * What happens when the tab is clicked
   */
  onClick: PropTypes.func,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  onClick: null,
  className: null
};

const Tab = (props) => {
  const { active, onClick, className } = props;

  return (
    <TabContainer active={active} onClick={onClick} className={className}>
      {props.children}
    </TabContainer>
  );
};

Tab.propTypes = propTypes;
Tab.defaultProps = defaultProps;

export default Tab;
