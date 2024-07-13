import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export const App = () => {
  return (
    <>
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
      React homework 2 - feedback
      </div>
      <Statistics good="good" neutral="neutral" bad="bad" total="total" positivePercentage="positivePercentage" /> 
      <FeedbackOptions options="options" onLeaveFeedback="options" />
    </>
  );
};

