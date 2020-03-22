import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import Statistics from "./Statistics/Statistics";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  static defaultProps = {
    title: "Please leave feedback"
  };
  onLeaveFeedback = e => {
    const step = 1;
    const { name } = e.target;
    this.setState(state => ({
      [name]: state[name] + step
    }));
  };
  countPositiveFeedbackPercentage = e => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };
  countTotalFeedback = e => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  static propTypes = {};

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={this.props.title}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
