import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import css from './FeedbackStats.module.css'

export const FeedbackStats = () => {

    const [goodEvaluation, setGoodEvaluation] = useState(0);
    const [neutralEvaluation, setNeutralEvaluation] = useState(0);
    const [badEvaluation, setBadEvaluation] = useState(0);

    const onGoodClick = () => {
        setGoodEvaluation(prevValue => prevValue + 1)
    }

    const onNeutralClick = () => {
        setNeutralEvaluation(prevValue => prevValue + 1)
    }

    const onBadClick = () => {
        setBadEvaluation(prevValue => prevValue + 1)
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
            </div>

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