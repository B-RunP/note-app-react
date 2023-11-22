import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils"

function NoteDetail({ id, title, createdAt, body }) {
    return (
        <div id={id} className="note-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <p className="detail-page__body">{body}</p>
        </div >
    )
}

NoteDetail.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    createdAt: PropTypes.string,
    body: PropTypes.string

}

export default NoteDetail;