import { createSlice } from '@reduxjs/toolkit';

const initialState = { data: null };

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    POST_QUESTION: (state, action) => { /* no state change */ },
    FETCH_ALL_QUESTIONS: (state, action) => { state.data = action.payload; },
    POST_ANSWER: (state, action) => { /* no state change */ },
  },
});

export const { POST_QUESTION, FETCH_ALL_QUESTIONS, POST_ANSWER } = questionSlice.actions;
export default questionSlice.reducer;