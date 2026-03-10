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

        updateProfilePic: (state, action) => {
            state.user.profile_pic = action.payload;
        },
    },
});

export const { setUser, clearUser, updateProfilePic } = userSlice.actions;
export default userSlice.reducer;
