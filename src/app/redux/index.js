import { configureStore } from '@reduxjs/toolkit';
import waitlistReducer from "./waitlist.slice"

const store = configureStore({
    reducer: {
        clients: waitlistReducer
    },
});

export default store;