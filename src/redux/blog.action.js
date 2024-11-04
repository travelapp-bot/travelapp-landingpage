import { db } from "@/components/firebase/firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { setAllBlog, setCategory } from "./blog.slice";

export const getAllBlogs = createAsyncThunk(
    "allBlog",
    async (_, { dispatch }) => {

        try {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            console.log("Query Snapshot:", querySnapshot);
            const documents = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log("Retrieved Documents:", documents);
            if (documents) {
                dispatch(setAllBlog(documents));
            }

            return documents;
        } catch (e) {
            console.error("Error fetching blogs:", e);
        }
    }
);

export const getCategories = createAsyncThunk(
    "getCategories",
    async (_, { dispatch }) => {
        try {
            const querySnapshot = await getDocs(collection(db, "categories"));
            console.log("Query Snapshot:", querySnapshot);
            const documents = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            console.log("Retrieved Documents:", documents);
            if (documents) {
                console.log(documents)
                dispatch(setCategory(documents));
            }

            return documents;
        } catch (e) {
            console.error("Error fetching blogs:", e);
        }
    }
)