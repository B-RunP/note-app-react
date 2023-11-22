import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { showFormattedDate } from "../utils";

function NoteItem({ id, title, createdAt, body }) {
    return (
        <div id={id} className="note-item">
            <Link to={`/detail/${id}`} className="detail-page__title"><h3>{title}</h3></Link>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
        </div >
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired

}

export default NoteItem;