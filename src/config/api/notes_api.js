import axios from "axios";

export const url = import.meta.env.VITE_NOTES_API;

export const notes_api = axios.create({
    baseURL: url,
    withCredentials: true,
});

const getNotes = async () => {
    try {
        const result = await notes_api.get("/getNotes");

        return result.data.notes;
    } catch (error) {
        console.log(error);
    }
};

const createNote = async (note) => {
    try {
        await notes_api.post("/createNote", { note });
    } catch (error) {
        console.error(error.response);
        throw new Error();
    }
};

export { getNotes, createNote };
