import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './StatisticsSection.module.css';
import Notification from 'components/Notification/Notification';

class StatisticsSection extends Component {
  static defaultProps = {
    // good: 0,
    // neutral: 0,
    // bad: 0,
    // total: 0,
    // positiveFeedback: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    total: this.props.total,
    positiveFeedback: this.props.positiveFeedback,
  };

  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.state;
    if (total <= 0) return <Notification message="There is no feedback" />;

    return (
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>
          Good:
          <span className={css.statistics__span}>{good}</span>
        </li>
        <li className={css.statistics__item}>
          Neutral:
          <span className={css.statistics__span}>{neutral}</span>
        </li>
        <li className={css.statistics__item}>
          Bad:
          <span className={css.statistics__span}>{bad}</span>
        </li>
        <li className={css.statistics__item}>
          Total:
          <span className={css.statistics__span}>{total}</span>
        </li>
        <li className={css.statistics__item}>
          Positive feedback:
          <span className={css.statistics__span}>
            {positiveFeedback ? `${positiveFeedback}%` : '0'}
          </span>
        </li>
      </ul>
    );
  }
}

StatisticsSection.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default StatisticsSection;
