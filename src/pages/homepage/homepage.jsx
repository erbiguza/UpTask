import Deadline from "../../componentes/deadline/deadline.component";
import Overview from "../../componentes/overview/overview.component";
import QuickNotes from "../../componentes/quicknotes/quicknotes.component";
import Welcome from "../../componentes/welcome/welcome.component";
import NormalInput from "../../componentes/inputs/normal-input.component.jsx";

import "./homepage.styles.scss";

import { getNotes, createNote } from "../../config/api/notes_api.js";

import { userSelector } from "../../redux/user/userSelector.js";
import { setLoading } from "../../redux/loading/loadingSlice.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import OverlayBox from "../../componentes/overlay-box/overlaybox.component.jsx";

function Homepage() {
    const { first_name } = userSelector();
    const [noteForm, setNoteForm] = useState(false);
    const [noteValue, setNoteValue] = useState("");
    const [notes, setNotes] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                dispatch(setLoading(true));
                const data = await getNotes();
                setNotes(data);
            } catch (error) {
            } finally {
                dispatch(setLoading(false));
            }
        };

        fetchNotes();
    }, []);

    return (
        <>
            {noteForm ? (
                <OverlayBox
                    title={"Add Note"}
                    buttonName={"Add Note"}
                    onClose={() => {
                        setNoteForm(false);
                    }}
                    onSend={async () => {
                        try {
                            dispatch(setLoading(true));
                            const response = await createNote(noteValue);
                            setNotes([...notes, response.data.task]);
                        } catch (error) {
                            console.log(
                                "Couldn't create note",
                                console.log(error),
                            );
                        } finally {
                            setNoteValue("");
                            setNoteForm(false);
                            dispatch(setLoading(false));
                        }
                    }}
                >
                    <NormalInput
                        value={noteValue}
                        onchange={(e) => {
                            setNoteValue(e.target.value);
                        }}
                    />
                </OverlayBox>
            ) : (
                <></>
            )}
            <Welcome
                title={`Welcome back, ${first_name}!`}
                description={"Here's your productivity overview"}
            />
            <Overview />
            <div className="bottom-container">
                <Deadline />
                <QuickNotes
                    notes={notes}
                    setNotes={setNotes}
                    onclick={() => {
                        setNoteForm(!noteForm);
                    }}
                />
            </div>
        </>
    );
}

export default Homepage;
