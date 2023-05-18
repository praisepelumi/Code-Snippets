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
      state.snippets = [...state.snippets, action.payload];
    },
  },
});

export const { setUsername, setLoading, setSnippets } = appSlice.actions;

export default appSlice.reducer;
