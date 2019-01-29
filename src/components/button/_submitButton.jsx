import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '.';
import CircularProgress from '../circularProgress';

const propTypes = {
  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the button
   */
  color: PropTypes.string,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The loading state
   */
  loading: PropTypes.bool,
  /**
   * What happens when the button is clicked
   */
  onClick: PropTypes.func
};

const defaultProps = {
  color: 'porcelain',
  disabled: false,
  loading: false,
  onClick: null
};

const Progress = styled(CircularProgress)`
  display: inline-flex;
  vertical-align: middle;
`;

const SubmitButton = (props) => {
  const {
    children,
    loading,
    disabled,
    onClick,
    color
  } = props;

  return (
    <Button
      {...props}
      disabled={loading || disabled}
      onClick={() => { if (onClick && !loading) onClick(); }}
    >
      {loading ? <Progress color={color} /> : children}
    </Button>
  );
};

SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;

export default SubmitButton;
