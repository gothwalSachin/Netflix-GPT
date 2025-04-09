import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptMoviesList: null,
        finalMoviesList: null,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResult: (state, action) => {
            const { gptMoviesList, finalMoviesList } = action.payload;
            state.gptMoviesList = gptMoviesList;
            state.finalMoviesList = finalMoviesList;
        },
    }
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;