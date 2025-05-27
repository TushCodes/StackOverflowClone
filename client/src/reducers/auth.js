import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ authdata, navigate }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await api.signup(authdata);
      localStorage.setItem('Profile', JSON.stringify({ ...data }));
      navigate && navigate('/');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ authdata, navigate }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await api.login(authdata);
      localStorage.setItem('Profile', JSON.stringify({ ...data }));
      navigate && navigate('/');
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = { data: null, status: 'idle', error: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGOUT: (state) => {
      localStorage.clear();
      state.data = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { LOGOUT } = authSlice.actions;
export default authSlice.reducer;