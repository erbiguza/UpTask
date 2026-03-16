import { createSlice } from "@reduxjs/toolkit";

const darkMode = localStorage.getItem("darkMode") === "true";

const initialState = { darkmode: darkMode };

const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkmode = action.payload;

            localStorage.setItem("darkMode", JSON.stringify(action.payload));
        },
    },
});

export const { setDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
