import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Box, StyledCheckIcon, Label } from './checkbox.styles';

const propTypes = {
  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node.isRequired,
  /**
   *  Color of the checkbox
   */
  color: PropTypes.string,
  /**
   *  The checked status
   */
  checked: PropTypes.bool,
  /**
   *  The disabled status
   */
  disabled: PropTypes.bool,
  /**
   * CSS styles
   */
  className: PropTypes.string,
  /**
   * What happens when the checked status changes
   */
  onChange: PropTypes.func
};

const defaultProps = {
  color: 'red',
  className: null,
  checked: false,
  disabled: false,
  onChange: null
};

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.checked !== nextProps.checked) {
      this.setState({ checked: nextProps.checked });
    }
  }

  handleClick() {
    if (this.props.disabled) return;
    const newValue = !this.state.checked;

    this.setState({ checked: newValue });
    if (this.props.onChange) this.props.onChange(newValue);
  }

  render() {
    const {
      children,
      color,
      className,
      disabled
    } = this.props;

    const { checked } = this.state;

    return (
      <Container
        className={className}
        role="checkbox"
        aria-checked="false"
        tabIndex="0"
        onClick={this.handleClick}
        onKeyPress={this.handleClick}
        disabled={disabled}
      >
        <Box color={color} checked={checked} disabled={disabled}>
          {checked && <StyledCheckIcon color="white" />}
        </Box>
        <Label>{children}</Label>
      </Container>
    );
  }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
