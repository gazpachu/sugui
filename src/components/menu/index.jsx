import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './menu.styles';

const propTypes = {
  /**
   * The DOM element where the menu has to be attached to
   */
  anchorEl: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.string.isRequired
  }),
  /**
   * Open state of the menu
   */
  open: PropTypes.bool,
  /**
   * Callback function when the menu closes
   */
  onClose: PropTypes.func
};

const defaultProps = {
  anchorEl: {
    top: 0,
    left: 0
  },
  open: false,
  onClose: () => {}
};

class Menu extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = null;
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.open) {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.onClose(event);
    }

    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { anchorEl, open, onClose } = this.props;

    return (
      <Wrapper anchorEl={anchorEl} open={open} onClose={onClose}>
        <div ref={(c) => { this.wrapperRef = c; }}>
          {this.props.children}
        </div>
      </Wrapper>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
