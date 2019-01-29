import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '../../icons/checkCircle';
import WarningIcon from '../../icons/warning';
import InfoIcon from '../../icons/info';
import {
  Container,
  Message,
  IconBlock
} from './notification.styles';

const propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  open: PropTypes.bool.isRequired
};

// eslint-disable-next-line
class NotificationContent extends PureComponent {
  render() {
    const {
      message,
      onClose,
      variant,
      open,
      ...other
    } = this.props;
    const variantIcon = {
      success: CheckCircleIcon,
      warning: WarningIcon,
      error: InfoIcon,
      info: InfoIcon
    };
    const Icon = variant !== '' ? variantIcon[variant] : null;

    return (
      <Container open={open} message={message} variant={variant} {...other}>
        <IconBlock variant={variant}>
          {Icon ? <Icon color="white" /> : null}
        </IconBlock>
        <Message>
          {message}
        </Message>
        {/* <StyledCloseButton onClick={onClose}>
          <CloseIcon color="white" />
        </StyledCloseButton> */}
      </Container>
    );
  }
}

NotificationContent.propTypes = propTypes;

export default NotificationContent;
