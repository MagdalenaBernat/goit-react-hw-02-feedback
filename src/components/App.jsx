import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackStats } from "./FeedbackStats/FeedbackStats";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section"
import { Notification } from "./Notification/Notification"
import { PhoneBook } from "./PhoneBook/PhoneBook";

// const [phoneNumber, setPhoneNumber] = useState("");
    
const [contacts, setContacts] = useState([]);
const [name, setName] = useState("");


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
      <Section title="Please leave feedback" />
      <FeedbackOptions />
      <Statistics good="goodEvaluation" neutral="neutralEvaluation" bad="badEvaluation" total="countTotalFeedback" positivePercentage="countPositiveFeedbackPercentage" /> 
      <Notification />
      <FeedbackStats options="options" onLeaveFeedback="options" />

      <PhoneBook contacts="contacts" name="name"/>

    </>
  );
};

