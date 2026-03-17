import SpecialBox from "../../ui/specialbox/specialbox.component";
import Note from "./note.component";

import { notes_api } from "../../../config/api/notes_api";

function QuickNotes({ notes, setNotes, onclick }) {
    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id != id);
        setNotes(newNotes);
        notes_api.delete(`/deleteNote/${id}`);
    };

    return (
        <SpecialBox
            boxname={"Quick Notes"}
            width={"35%"}
            button={"+ Add Note"}
            onclick={onclick}
        >
            {notes.length > 0 ? (
                notes.map((note) => (
                    <Note
                        key={note.id}
                        note={note.note}
                        deleteNote={deleteNote}
                        id={note.id}
                    />
                ))
            ) : (
                <p>No Notes Yet</p>
            )}
        </SpecialBox>
    );
}

export default QuickNotes;
