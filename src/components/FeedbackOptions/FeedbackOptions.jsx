import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ options = [], onLeaveFeedback }) {
  const handleClick = e => {
    const optionChosen = e.target.textContent;
    onLeaveFeedback(optionChosen);
  };

  return (
    <ul className={css.feedback__btnList}>
      {options.map(option => (
        <li key={option} className={css.feedback__btnItem}>
          <button className={css.feedback__btn} onClick={handleClick}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
