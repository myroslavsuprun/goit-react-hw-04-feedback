import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Notification.module.css';

class Notification extends Component {
  static defaultProps = {
    message: '',
  };

  state = {
    message: this.props.message,
  };

  render() {
    const { message } = this.state;

    return <p className={css.message}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
