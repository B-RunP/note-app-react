import React from "react"
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom"

function NoteInputPage() {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [charcount, setCharcount] = React.useState(50);
    const navigate = useNavigate();

    function onTitleChangeEventHandler(event) {
        let lenCount = event.target.value.length;
        let max_len = 50;
        let result = max_len - lenCount;
        setTitle(event.target.value);
        setCharcount(result);

    }

    function onBodyChangeEventHandler(event) {
        setBody(event.target.value);
    }

    async function onSubmitEventHandler(event) {
        event.preventDefault();
        await addNote({ title: title, body: body })
        navigate("/");
    }

    return (
        <NoteInput charcount={charcount} title={title} body={body} onTitleChange={onTitleChangeEventHandler}
            onBodyChange={onBodyChangeEventHandler} onSubmit={onSubmitEventHandler} />
    )

}

export default NoteInputPage;