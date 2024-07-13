import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'


export const PhoneBook = () => {

    const addContact = (e) => {
        return (
            <li>{e.target.value}</li>
        )
    }

    return (
        <>
            <h2>Phonebook</h2>
            <div>
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <button type="button" onClick={addContact}>Add contact</button>
            </div>
            <h2>Contacts</h2>
            <ul>
                {addContact}
            </ul>
        </>
    )
}



PhoneBook.propTypes = {
    // goodEvaluation: PropTypes.number,
    // neutralEvaluation: PropTypes.number,
    // badEvaluation: PropTypes.number,
    // countTotalFeedback: PropTypes.number,
    // countPositiveFeedbackPercentage: PropTypes.number
}