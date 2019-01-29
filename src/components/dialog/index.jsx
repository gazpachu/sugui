import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  DialogContainer,
  Title,
  Content
} from './dialog.styles';

const propTypes = {
  /**
   * Open state of the dialog. Use null by default
   */
  open: PropTypes.bool,
  /**
   * Title of the dialog
   */
  heading: PropTypes.string,
  /**
   * The content to render within the dialog
   */
  children: PropTypes.node.isRequired,
  /**
   * Separation (in px) from the top of the screen
   */
  topOffset: PropTypes.number
};

const defaultProps = {
  open: null,
  heading: '',
  topOffset: 60
};

const Dialog = (props) => {
  const {
    open,
    heading,
    children,
    topOffset
  } = props;

  return (
    <Container open={open} topOffset={topOffset}>
      <DialogContainer>
        <Title>{heading}</Title>
        <Content>
          {children}
        </Content>
      </DialogContainer>
    </Container>
  );
};

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
