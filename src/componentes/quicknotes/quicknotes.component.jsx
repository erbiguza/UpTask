import Note from "./note.component";
import "./quicknotes.styles.scss";

function QuickNotes() {
    const notes = ["Note number 1", "Create Note number 2"];
    return (
        <div className="section-container">
            <h3>Quick Notes</h3>
            <div className="notes-container">
                {notes.map((note) => (
                    <Note key={note} note={note} />
                ))}
            </div>
            <div className="button-container">
                <button className="add-button">
                    <span>&#43;</span> Add Note
                </button>
            </div>
        </div>
    );
}

export default QuickNotes;
