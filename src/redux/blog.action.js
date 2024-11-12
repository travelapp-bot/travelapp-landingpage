import { db } from "@/components/firebase/firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs,Timestamp } from "firebase/firestore";
import { setAllBlog, setCategory } from "./blog.slice";
import { setloader } from "./loader.slice";

export const getAllBlogs = createAsyncThunk(
    "allBlog",
    async (_, { dispatch }) => {
        dispatch(setloader(true))
        // try {
        //     const querySnapshot = await getDocs(collection(db, "blogs"));
        //     console.log("Query Snapshot:", querySnapshot);
        //     const documents = querySnapshot.docs.map((doc) => ({
        //         id: doc.id,
        //         ...doc.data(),
        //     }));

        //     console.log("Retrieved Documents:", documents[1].createDate);
        //     if (documents) {
        //         dispatch(setAllBlog(documents));

        //     }
        //     dispatch(setloader(false))

        //     return documents;
        // }
        try {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const documents = querySnapshot.docs.map((doc) => {
              const data = doc.data();
              // Convert Firestore Timestamp to JavaScript Date
              if (data.createDate instanceof Timestamp) {
                data.createDate = data.createDate.toDate().toISOString();
              }
              return {
                id: doc.id,
                alt:doc.id,
                ...data,
              };
            });
          
            if (documents) {
              dispatch(setAllBlog(documents));
            }
            dispatch(setloader(false));
            console.log(documents);
            return documents;

          } catch (e) {
            console.error("Error fetching blogs:", e);
            dispatch(setloader(false))
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