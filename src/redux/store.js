import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import loadingReducer from "./loading/loadingSlice.js";
import darkmodeReducer from "./darkmode/darkmodeSlice.js";
import taskReducer from "./tasks/taskSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        loading: loadingReducer,
        darkmode: darkmodeReducer,
        tasks: taskReducer,
    },
});
