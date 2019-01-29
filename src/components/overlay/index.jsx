import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../icons/close';
import {
  StyledCloseButton,
  Container,
  Title,
  Content
} from './overlay.styles';

const propTypes = {
  /**
   * Open state of the overlay. Use null by default
   */
  open: PropTypes.bool,
  /**
   * Title of the overlay
   */
  heading: PropTypes.string,
  /**
   * Callback when the overlay closes
   */
  onClose: PropTypes.func,
  /**
   * Separation (in px) from the top of the screen
   */
  topOffset: PropTypes.number
};

const defaultProps = {
  open: null,
  heading: '',
  onClose: null,
  topOffset: 60
};

const Overlay = (props) => {
  const {
    open,
    onClose,
    heading,
    children,
    topOffset
  } = props;

  return (
    <Container open={open} topOffset={topOffset}>
      <StyledCloseButton onClick={onClose}>
        <CloseIcon color="white" />
      </StyledCloseButton>
      <Title>{heading}</Title>
      <Content>
        {children}
      </Content>
    </Container>
  );
};

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;

export default Overlay;
