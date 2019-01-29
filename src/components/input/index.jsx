import React from 'react';
import PropTypes from 'prop-types';
import {
  InputWrapper,
  Textarea,
  InputField,
  Icon
} from './input.styles';

const propTypes = {
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
   * Validation style. True is valid. False is invalid
   */
  isValid: PropTypes.bool,
  /**
   * If true it renders a textarea
   */
  multiline: PropTypes.bool,
  /**
  * Native input props. Refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
  */
  inputProps: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.any
  }),
  /**
   * What happens when the input is clicked
   */
  onClick: PropTypes.func,
  /**
   * What happens when the input value changes
   */
  onChange: PropTypes.func,
  /**
   * The text value of the input
   */
  value: PropTypes.string,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  color: 'porcelain',
  size: 'default',
  icon: null,
  iconPos: null,
  darkBg: false,
  isValid: null,
  multiline: false,
  inputProps: null,
  onClick: null,
  onChange: null,
  className: null
};

const Input = (props) => {
  const {
    color,
    size,
    icon,
    iconPos,
    multiline,
    isValid,
    darkBg,
    inputProps,
    onClick,
    onChange,
    className
  } = props;

  return (
    <InputWrapper disabled={inputProps && inputProps.disabled} className={className}>
      {multiline ?
        <Textarea
          color={color}
          isValid={isValid}
          darkBg={darkBg}
          onChange={onChange}
          {...inputProps}
        />
      : <InputField
        color={color}
        size={size}
        icon={icon}
        iconPos={iconPos}
        isValid={isValid}
        darkBg={darkBg}
        onClick={onClick}
        onChange={onChange}
        readOnly={inputProps && inputProps.readOnly}
        {...inputProps}
      />}
      {icon ?
        <Icon iconPos={iconPos} color={color} size={size}>{icon}</Icon>
      : null}
    </InputWrapper>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
