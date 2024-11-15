import { db } from "@/components/firebase/firebase.config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, getDoc,doc, Timestamp, query, orderBy, limit } from "firebase/firestore";
import { setAllBlog, setCategory } from "./blog.slice";
import { setloader } from "./loader.slice";

export const getAllBlogs = createAsyncThunk(
    "allBlog",
    async (_, { dispatch }) => {
        dispatch(setloader(true))
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
            // console.log(documents);
            return documents;

          } catch (e) {
            console.error("Error fetching blogs:", e);
            dispatch(setloader(false))
        }
    }
);


export const getSevenBlogs = createAsyncThunk(
  "sevenBlogs",
  async (_, { dispatch }) => {
    dispatch(setloader(true));
    try {
      // Set up a query to order by createDate and limit to 7 blogs
      const blogsQuery = query(
        collection(db, "blogs"),
        orderBy("createDate", "desc"),
        limit(7)
      );

      const querySnapshot = await getDocs(blogsQuery);
      const documents = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        // Convert Firestore Timestamp to JavaScript Date
        if (data.createDate instanceof Timestamp) {
          data.createDate = data.createDate.toDate().toISOString();
        }
        return {
          id: doc.id,
          alt: doc.id,
          ...data,
        };
      });

      if (documents) {
        dispatch(setAllBlog(documents));
      }
      dispatch(setloader(false));
      return documents;

    } catch (e) {
      console.error("Error fetching blogs:", e);
      dispatch(setloader(false));
    }
  }
);


export const getBlogById = createAsyncThunk(
  "blog/fetchById",
  async (id, { dispatch }) => {
      dispatch(setloader(true));
      try {
          let documents;

          if (id) {
              // Fetch a single blog by ID
              const blogRef = doc(db, "blogs", id);
              const blogDoc = await getDoc(blogRef);
              
              if (blogDoc.exists()) {
                  const data = blogDoc.data();
                  if (data.createDate instanceof Timestamp) {
                      data.createDate = data.createDate.toDate().toISOString();
                  }
                  documents = [{ id: blogDoc.id,  alt: data.title || "Blog image", ...data }];
              } else {
                  console.error("Blog not found with id:", id);
              }
          } else {
              // Fetch all blogs if no ID is provided
              const querySnapshot = await getDocs(collection(db, "blogs"));
              documents = querySnapshot.docs.map((doc) => {
                  const data = doc.data();
                  if (data.createDate instanceof Timestamp) {
                      data.createDate = data.createDate.toDate().toISOString();
                  }
                  return { id: doc.id,   alt: data.title || "Blog image", ...data };
              });
          }

          if (documents) {
              dispatch(setAllBlog(documents));
          }

          dispatch(setloader(false));
          return documents;

      } catch (error) {
          console.error("Error fetching blog(s):", error);
          dispatch(setloader(false));
      }
  }
);

export const getCategories = createAsyncThunk(
    "getCategories",
    async (_, { dispatch }) => {
        try {
            const querySnapshot = await getDocs(collection(db, "categories"));
            // console.log("Query Snapshot:", querySnapshot);
            const documents = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            // console.log("Retrieved Documents:", documents);
            if (documents) {
                // console.log(documents)
                dispatch(setCategory(documents));
            }

            return documents;
        } catch (e) {
            console.error("Error fetching blogs:", e);
        }
    }
)