import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import {
  Wrapper,
  Label,
  Required,
  AssistiveText,
  StyledWarningIcon,
  StyledCheckIcon
} from './textField.styles';
import Input from '../input';

const propTypes = {
  /**
   * Text to display at the top of the input field
   */
  label: PropTypes.string,
  /**
   * Border and icon color
   */
  color: PropTypes.string,
  /**
   * The size of the input
   */
  size: PropTypes.oneOf(['default', 'small']),
  /**
   * Icon component to display
   */
  icon: PropTypes.node,
  /**
   * Icon's position in the input
   */
  iconPos: PropTypes.string,
  /**
   * Overrides the default color for text values
   */
  darkBg: PropTypes.bool,
  /**
   * Text to display at the bottom left side
   */
  assistiveText: PropTypes.string,
  /**
   * Validation style. True is valid. False is invalid
   */
  isValid: PropTypes.bool,
  /**
   * What happens when the textField is clicked
   */
  onClick: PropTypes.func,
  /**
   * What happens when the textField value changes
   */
  onChange: PropTypes.func,
  /**
  * Native input props. Refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  */
  inputProps: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.any
  }),
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  label: null,
  color: 'porcelain',
  size: 'default',
  icon: null,
  iconPos: null,
  darkBg: false,
  assistiveText: null,
  isValid: null,
  onClick: null,
  onChange: null,
  className: null,
  inputProps: null
};

class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      label,
      color,
      size,
      assistiveText,
      isValid,
      onClick,
      onChange,
      theme,
      darkBg,
      className,
      inputProps,
      icon,
      iconPos
    } = this.props;

    return (
      <div className={className}>
        {label ? <Label darkBg={darkBg}>{label}</Label> : null} {inputProps && inputProps.required ? <Required>*</Required> : null}
        <Input
          inputProps={inputProps}
          color={color}
          size={size}
          isValid={isValid}
          onClick={onClick}
          onChange={onChange}
          darkBg={darkBg}
          icon={icon}
          iconPos={iconPos}
        />
        {isValid !== null && !isValid && <StyledWarningIcon color={theme.colors.digitalDarkRed} />}
        {isValid !== null && isValid && <StyledCheckIcon color={theme.colors.digitalGreen} />}
        {assistiveText ? <AssistiveText darkBg={darkBg}>{assistiveText}</AssistiveText> : null}
      </div>
    );
  }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default withTheme(TextField);
