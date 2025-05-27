import { createSlice } from '@reduxjs/toolkit';

const currentuserSlice = createSlice({
  name: 'currentuser',
  initialState: null,
  reducers: {
    FETCH_CURRENT_USER: (state, action) => action.payload,
  },
});

export const { FETCH_CURRENT_USER } = currentuserSlice.actions;
export default currentuserSlice.reducer;