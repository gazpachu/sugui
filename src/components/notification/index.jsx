import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NotificationContent from './_notificationContent';

const propTypes = {
  /**
   * The object containing the message and type of notification
   */
  notification: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
    message: PropTypes.string
  }),
  /**
   * Callback to reset the notification message and type
   */
  setNotification: PropTypes.func
};

const defaultProps = {
  notification: {
    type: '',
    message: ''
  },
  setNotification: () => {}
};

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.wrapperRef = null;
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.notification.message !== '') {
      if (newProps.notification.message.indexOf('401') !== -1 ||
      newProps.notification.message.toLowerCase().indexOf('unauthorised') !== -1 ||
      newProps.notification.message.toLowerCase().indexOf('unauthorized') !== -1) {
        window.location.replace(newProps.containerUrl ? newProps.containerUrl : '/');
      } else {
        if (newProps.honeybadger && newProps.notification.type === 'error' && newProps.notification.message.indexOf('Error code') === -1) {
          newProps.honeybadger.notify(newProps.notification.message);
        }

        this.setState({ open: true });
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    }
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.handleClose();
    }

    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClose() {
    this.setState({ open: false });
    if (this.props.setNotification) setTimeout(() => this.props.setNotification({ message: '', type: 'info' }), 2000);
  }

  render() {
    const { notification } = this.props;
    return (
      <Fragment>
        <div ref={(c) => { this.wrapperRef = c; }}>
          <NotificationContent
            open={this.state.open}
            onClose={event => this.handleClose(event)}
            variant={notification.type}
            message={notification.message}
          />
        </div>
      </Fragment>
    );
  }
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
