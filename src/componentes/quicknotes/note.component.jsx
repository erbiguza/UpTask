import "./note.styles.scss";

function Note({ note, deleteNote, id }) {
    return (
        <div className="note">
            <p>&#8226; {note}</p>
            <div className="btn-container">
                <div
                    className="delete-btn"
                    onClick={() => {
                        deleteNote(id);
                    }}
                >
                    <p>&minus;</p>
                </div>
            </div>
        </div>
    );
}

export default Note;
