import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    FETCH_USERS: (state, action) => action.payload,
    UPDATE_CURRENT_USER: (state, action) => state.map((user) => user._id === action.payload._id ? action.payload : user),
  },
});

export const { FETCH_USERS, UPDATE_CURRENT_USER } = usersSlice.actions;
export default usersSlice.reducer;