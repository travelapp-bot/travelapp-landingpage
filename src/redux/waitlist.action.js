import { createAsyncThunk } from "@reduxjs/toolkit";
import {db } from "../components/firebase/firebase.config";
import { doc, setDoc } from "firebase/firestore";
import { ModalToggle } from "./waitlist.slice";


export const waitlistAction = createAsyncThunk(
    "joinWaitlist/form",
    async (formData, { dispatch }) => {
        try {

            const docRef = doc(db, "clients", formData.email);

            await setDoc(docRef, formData);
            dispatch(ModalToggle(false));

            console.log("Form data successfully submitted to Firebase");

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
);
