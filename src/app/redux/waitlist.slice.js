import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    newCleints: {},
    openModal: false
}

const waitlistReducer = createSlice({
    name: "clients",
    initialState,
    reducers: {
        waitlistCleints: (state, { payload }) => {
            state.newCleints = { ...newCleints, payload }
        },
        ModalToggle: (state, { payload }) => {
            state.openModal = payload
        }
    }
})

export const { waitlistCleints, ModalToggle } = waitlistReducer.actions
export default waitlistReducer.reducer
