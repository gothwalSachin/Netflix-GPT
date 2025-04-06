import { createSlice } from "@reduxjs/toolkit";
import { SUPPORTED_LANGUAGES } from "./constants";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: SUPPORTED_LANGUAGES[0].identifier,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
    },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;