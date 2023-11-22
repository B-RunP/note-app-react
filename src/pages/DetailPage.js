import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import NoteDetail from '../components/NoteDetail';
import { deleteNote, getNote } from '../utils/network-data';

function DetailPage() {
    const [note, setNote] = React.useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
        });
    }, []);

    async function onDeleteHandler() {
        await deleteNote(id)
        navigate("/");
    }

    if (note === null) {
        return <p>Note is not found!</p>;
    }

    console.log(note);

    return (
        <section>
            <NoteDetail id={note.id} title={note.title} createdAt={note.createdAt} body={note.body} />

            <div className='action-btn'>
                <DeleteButton onDelete={onDeleteHandler} />
            </div>
        </section>
    );
}

export default DetailPage;
