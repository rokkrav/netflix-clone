import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { gptSearchView: false, movieName: null, movieResults: null },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addMovie: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieName = movieName;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addMovie } = gptSlice.actions;
export default gptSlice.reducer;
