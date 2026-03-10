import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkmode: false };

const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkmode = action.payload;
        },
    },
});

export const { setDarkMode } = darkmodeSlice.actions;
export default darkmodeSlice.reducer;
