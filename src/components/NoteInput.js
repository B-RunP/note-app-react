import React from 'react';
import PropTypes from 'prop-types';

function NoteInput({ title, body, charcount, onTitleChange, onBodyChange, onSubmit }) {
    return (
        <form className='note-input' onSubmit={onSubmit}>
            <p className="note-input__title__char-limit">Sisa karakter: {charcount}</p>
            <input className='note-input__title' maxLength='50' placeholder='Title' value={title} onChange={onTitleChange} required />
            <textarea className='note-input__body' placeholder='Your note...' value={body} onChange={onBodyChange} required />
            <button type='submit'>Tambah</button>
        </form>
    )
}

NoteInput.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    charcount: PropTypes.number.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onBodyChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default NoteInput;