import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Inner } from './switch.styles';

const propTypes = {
  /**
   * The background color of the switch when enabled
   */
  bg: PropTypes.string,
  /**
   * Disables the switch
   */
  disabled: PropTypes.bool,
  /**
   * Callback when the switch state changes
   */
  onChange: PropTypes.func,
  /**
   * Callback when the mouse is up
   */
  onMouseUp: PropTypes.func,
  /**
   * Callback when the switch state changes
   */
  onClick: PropTypes.func,
  /**
   * Accesibility tabIndex
   */
  tabIndex: PropTypes.number,
  /**
   * State to control the checked value
   */
  checked: PropTypes.bool,
  /**
   * Default check state
   */
  defaultChecked: PropTypes.bool,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  bg: 'primary',
  disabled: false,
  defaultChecked: false,
  onMouseUp: null,
  onChange: null,
  onClick: null,
  tabIndex: null,
  className: null
};

class Switch extends Component {
  constructor(props) {
    super(props);

    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = { checked };

    this.toggle = this.toggle.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.saveNode = this.saveNode.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: !!nextProps.checked });
    }
  }

  setChecked(checked) {
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({ checked });
    }
    if (this.props.onChange) this.props.onChange(checked);
  }

  toggle() {
    const { onClick } = this.props;
    const checked = !this.state.checked;
    this.setChecked(checked);
    if (onClick) onClick(checked);
  }

  handleMouseUp(e) {
    if (this.node) {
      this.node.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  }

  focus() {
    this.node.focus();
  }

  blur() {
    this.node.blur();
  }

  saveNode(node) {
    this.node = node ? node.ref : null;
  }

  render() {
    const {
      bg,
      disabled,
      defaultChecked,
      onChange,
      tabIndex,
      className
    } = this.props;
    const { checked } = this.state;
    const switchTabIndex = disabled ? -1 : (tabIndex || 0);

    return (
      <Container
        bg={bg}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        tabIndex={switchTabIndex}
        ref={this.saveNode}
        onClick={this.toggle}
        onMouseUp={this.handleMouseUp}
        className={className}
      >
        <Inner />
      </Container>
    );
  }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;
