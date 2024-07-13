import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import css from './FeedbackStats.module.css'

export const FeedbackStats = (initialValue = 0, step = 1) => {

    const [goodEvaluation, setGoodEvaluation] = useState(initialValue);
    const [neutralEvaluation, setNeutralEvaluation] = useState(initialValue);
    const [badEvaluation, setBadEvaluation] = useState(initialValue);

    // const [phoneNumber, setPhoneNumber] = useState("");

    const onGoodClick = () => {
        setGoodEvaluation(prevValue => prevValue + step)
    }

    const onNeutralClick = () => {
        setNeutralEvaluation(prevValue => prevValue + step)
    }

    const onBadClick = () => {
        setBadEvaluation(prevValue => prevValue + step)
    }

    const totalValue = goodEvaluation + neutralEvaluation + badEvaluation;
    const positiveFeedback = goodEvaluation * 100 / totalValue;

    return (
        <>
            <h2>Please leave feedback</h2>
            <button type="button" onClick={onGoodClick}>Good</button>
            <button type="button" onClick={onNeutralClick}>Neutral</button>
            <button type="button" onClick={onBadClick}>Bad</button>
            <h2>Statistics</h2>
            <div>
                <p>Good: {goodEvaluation}</p>
                <p>Neutral: {neutralEvaluation}</p>
                <p>Bad: {badEvaluation}</p>
                <p>Total: {totalValue}</p>
                <p>Positive feedback: {positiveFeedback}%</p>
            </div>



            {/* <input value={phoneNumber} onChange={e => setPhoneNumber(Number(e.target.value))} /> */}
        </>
    )
}

FeedbackStats.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}


state = {
  good: 0,
  neutral: 0,
  bad: 0
}