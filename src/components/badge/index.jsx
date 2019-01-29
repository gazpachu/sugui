import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, BadgeStyle } from './badge.styles';

const propTypes = {
  /**
   * The content rendered within the badge.
   */
  content: PropTypes.number.isRequired,
  /**
   * The badge will be added relative to this node.
   */
  children: PropTypes.node.isRequired,
  /**
   * Background color
   */
  bg: PropTypes.string,
  /**
   * CSS styles
   */
  className: PropTypes.string
};

const defaultProps = {
  bg: 'red',
  className: null
};

const Badge = (props) => {
  const {
    content,
    children,
    bg,
    size,
    className
  } = props;

  return (
    <Container className={className}>
      <Label>{children}</Label>
      <BadgeStyle color={bg} size={size}>{content}</BadgeStyle>
    </Container>
  );
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
