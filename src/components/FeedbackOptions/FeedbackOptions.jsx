import React from "react";
import PropTypes from "prop-types";
const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button type="button" name="good" onClick={onLeaveFeedback}>
      good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      bad
    </button>
  </>
);
FeedbackOptions.propTypes = { onLeaveFeedback: PropTypes.func.isRequired };

export default FeedbackOptions;
