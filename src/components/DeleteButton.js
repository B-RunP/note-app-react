import React from 'react';
import PropTypes from 'prop-types';
import { MdDeleteOutline } from "react-icons/md";

function DeleteButton({ onDelete }) {
    return <button onClick={onDelete} className='btn-item'><MdDeleteOutline /></button>
}

DeleteButton.propTypes = {
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;
