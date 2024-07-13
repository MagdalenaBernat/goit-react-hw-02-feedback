import React from 'react'
import PropTypes from 'prop-types'
import css from './FeedbackStats.module.css'

export const FeedbackStats = () => {
    return (
        <>
            <h2>Please leave feedback</h2>
            <button>Good</button>
            <button>Neutral</button>
            <button>Bad</button>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
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