import { configureStore } from '@reduxjs/toolkit';
import waitlistReducer from "./waitlist.slice"
import blogReducer from "./blog.slice"

const store = configureStore({
    reducer: {
        clients: waitlistReducer,
        blog: blogReducer
    },
});

export default store;