import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { first_name, last_name, email, profile_pic } =
                action.payload;

            if (first_name && last_name && email && profile_pic) {
                state.user = {
                    first_name,
                    last_name,
                    email,
                    profile_pic,
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
