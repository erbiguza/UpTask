import SpecialBox from "../specialbox/specialbox.component";
import Note from "./note.component";

function QuickNotes() {
    const notes = ["Note number 1", "Create Note number 2"];
    return (
        <SpecialBox
            boxname={"Quick Notes"}
            width={"35%"}
            button={"+ Add Note"}
            onclick={() => console.log("punon")}
        >
            {notes.map((note) => (
                <Note key={note} note={note} />
            ))}
        </SpecialBox>
    );
}

export default QuickNotes;
