import { configureStore } from '@reduxjs/toolkit';
import waitlistReducer from "./waitlist.slice"
import blogReducer from "./blog.slice"
import loaderReducer from "./loader.slice"

const store = configureStore({
    reducer: {
        clients: waitlistReducer,
        blog: blogReducer,
        loader: loaderReducer
    },
});

export default store;