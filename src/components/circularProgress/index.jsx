import React from 'react';
import PropTypes from 'prop-types';
import { Label, Loader } from './circularProgress.styles';

const propTypes = {
  /**
   * Color of the loading circle
   */
  color: PropTypes.string,
  /**
   * Text to display beside the loader
   */
  label: PropTypes.string,
  /**
   * Position of the text
   */
  labelPos: PropTypes.oneOf(['left', 'right']),
  /**
   * Text to display beside the loader
   */
  darkBg: PropTypes.bool,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  color: 'abbey',
  label: null,
  labelPos: 'right',
  darkBg: false,
  className: null
};

const CircularProgress = (props) => {
  const {
    label,
    labelPos,
    color,
    darkBg,
    className
  } = props;

  return (
    <div className={className} data-testid="progress">
      {label && labelPos === 'left' ? <Label labelPos={labelPos} darkBg={darkBg}>{label}</Label> : null}
      <Loader color={color} />
      {label && labelPos === 'right' ? <Label labelPos={labelPos} darkBg={darkBg}>{label}</Label> : null}
    </div>
  );
};

CircularProgress.propTypes = propTypes;
CircularProgress.defaultProps = defaultProps;

export default CircularProgress;
