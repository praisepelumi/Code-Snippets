import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'appSlice',
  initialState: {
    username: '',
    loading: true,
    snippets: [],
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setSnippets: (state, action) => {
      if (!Array.isArray(action.payload)) {
        for (let i = 0; i < state.snippets.length; i++)
          if (state.snippets[i]._id === action.payload) state.snippets.splice(i, 1);
      } else state.snippets = [...state.snippets, ...action.payload];
    },
    updateSnippet: (state, action) => {
      for (let i = 0; i < state.snippets.length; i++) {
        if (action.payload._id === state.snippets[i]._id) {
          state.snippets[i] = action.payload;
          return;
        }
      }
    }
  },
});

export const { setUsername, setLoading, setSnippets, updateSnippet } = appSlice.actions;

export default appSlice.reducer;
