import React, { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };

  handleClick = e => {
    const optionChosen = e.target.textContent;
    this.props.onLeaveFeedback(optionChosen);
  };

  render() {
    const { options } = this.props;
    return (
      <ul className={css.feedback__btnList}>
        {options.map(option => (
          <li key={option} className={css.feedback__btnItem}>
            <button className={css.feedback__btn} onClick={this.handleClick}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;
