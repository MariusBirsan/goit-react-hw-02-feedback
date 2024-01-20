import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);

  return (
    <div className={styles.buttonsSection}>
      {stateArr.map(options => (
        <button
          className={styles[options]}
          key={options}
          type="button"
          name={options}
          onClick={() => onLeaveFeedback(options)}
        >
          {options}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
