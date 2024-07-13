import { useState } from "react";
import { Statistics } from "./Feedback/Statistics/Statistics";
import { FeedbackStats } from "./Feedback/FeedbackStats/FeedbackStats";
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Section } from "./Feedback/Section/Section"
import { Notification } from "./Feedback/Notification/Notification"
import { Phonebook } from "./Contacts/Phonebook/Phonebook";

   
export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
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

      <Phonebook contacts="contacts" name="name" number="number"/>
    </>
  );
};

