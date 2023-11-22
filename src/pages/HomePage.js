import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes } from "../utils/network-data";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    })

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });

    return (
        <React.Fragment>
            <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <NoteList notes={filteredNotes} />
            <Link to="/note-input" className="btn-input btn-item"><FiPlus /></Link>
        </React.Fragment >
    )
}

export default HomePage;