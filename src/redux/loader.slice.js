import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
};


const loaderReducer = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setloader: (state, { payload }) => {
            state.open = payload;
        }
    }
})

export default loaderReducer.reducer
export const { setloader } = loaderReducer.actions