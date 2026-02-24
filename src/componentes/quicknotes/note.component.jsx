import "./note.styles.scss";

function Note({ note }) {
    return (
        <div className="note">
            <p>&#8226; {note}</p>
        </div>
    );
}

export default Note;
