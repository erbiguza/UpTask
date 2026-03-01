import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { first_name, last_name, email } = action.payload;

            if (first_name && last_name && email) {
                state.user = {
                    first_name,
                    last_name,
                    email,
                };
            } else {
                state.user = {};
            }
        },

        clearUser: (state, action) => {
            state.user = {};
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
