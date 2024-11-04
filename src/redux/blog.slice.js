import { createDraftSafeSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    Category: []
}
const blogReducer = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setAllBlog: (state, { payload }) => {
            state.blogs = payload
        },
        setCategory: (state, { payload }) => {
            state.Category = payload
        }
    }

})

export default blogReducer.reducer
export const { setAllBlog, setCategory } = blogReducer.actions
export const category = createDraftSafeSelector(
    [state => state?.blog?.Category],
    (Category) => Category
)