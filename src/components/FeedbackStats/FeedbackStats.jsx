import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
// import css from './FeedbackStats.module.css'

export const FeedbackStats = (initialValue = 0, step = 1) => {

  const [goodEvaluation, setGoodEvaluation] = useState(initialValue);
  const [neutralEvaluation, setNeutralEvaluation] = useState(initialValue);
  const [badEvaluation, setBadEvaluation] = useState(initialValue);

    const onGoodClick = () => {
    setGoodEvaluation(prevValue => prevValue + step)
    }

    const onNeutralClick = () => {
        setNeutralEvaluation(prevValue => prevValue + step)
    }

    const onBadClick = () => {
        setBadEvaluation(prevValue => prevValue + step)
    }

    const countTotalFeedback = () => {
        return goodEvaluation + neutralEvaluation + badEvaluation
    }

    const countPositiveFeedbackPercentage = () => {
        return goodEvaluation * 100 / countTotalFeedback
    }

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
                <p>Total: {countTotalFeedback}</p>
                <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
            </div>

            {/* <input value={phoneNumber} onChange={e => setPhoneNumber(Number(e.target.value))} /> */ }
        </>
    )
}

FeedbackStats.propTypes = {
    goodEvaluation: PropTypes.number,
    neutralEvaluation: PropTypes.number,
    badEvaluation: PropTypes.number,
    countTotalFeedback: PropTypes.number,
    countPositiveFeedbackPercentage: PropTypes.number
}