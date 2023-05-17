import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import css from './Feedback.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = (selectedFeedback) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [selectedFeedback]: prevFeedback[selectedFeedback] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total > 0) {
      return Math.round((feedback.good / total) * 100);
    } else {
      return 0;
    }
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const options = Object.keys(feedback);

  return (
    <div className={css.section}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>

      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

  // handleIncrement = feedback => {
  //   this.setState(prevState => ({
  //     [feedback]: prevState[feedback] + 1,
  //   }));
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const total = this.countTotalFeedback();
  //   if (total > 0) {
  //     return Math.round((this.state.good / total) * 100);
  //   } else {
  //     return 0;
  //   }
  // };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeed = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const options = Object.keys(this.state);

//     return (
      // <div className={css.section}>
      //   <Section title="Please leave feedback">
      //     <FeedbackOptions
      //       options={options}
      //       onLeaveFeedback={this.handleIncrement}
      //     />
      //   </Section>

      //   <Section title="Statistics">
      //     {totalFeed > 0 ? (
      //       <Statistics
      //         good={good}
      //         neutral={neutral}
      //         bad={bad}
      //         total={totalFeed}
      //         positivePercentage={positivePercentage}
      //       />
      //     ) : (
      //       <Notification message="There is no feedback" />
      //     )}
      //   </Section>
        
      // </div>
//     );
//   }
// }

// export default App;
