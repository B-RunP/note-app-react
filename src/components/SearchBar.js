import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
    return (
        <div className="user-input">
            <h2>Cari Catatan</h2>
            <input
                type="text"
                placeholder="Cari judul catatan..."
                value={keyword}
                onChange={(event) => keywordChange(event.target.value)} />
        </div>
    )
}

SearchBar.propType = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default SearchBar;