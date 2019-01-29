import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './icon.styles';

const propTypes = {
  /**
   * The SVG icon glyph created by the sprite loader
   */
  glyph: PropTypes.shape({
    viewBox: PropTypes.string,
    id: PropTypes.string
  })
};

const defaultProps = {
  glyph: {
    viewBox: '0 0 20 20',
    id: ''
  }
};

const Icon = (props) => {
  if (props.glyph) {
    return (
      <Container
        viewBox={props.glyph.viewBox}
        {...props}
      >
        <use xlinkHref={`#${props.glyph.id}`} />
      </Container>
    );
  }
  return null;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
