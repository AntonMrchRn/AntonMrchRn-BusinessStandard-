import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { userAPI } from './userAPI';

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId);
    return response.data;
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserById.pending, (state, action) => {
      state.entities.push(action.payload);
    });

    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.entities.push(action.loading);
    });

    builder.addCase(fetchUserById.reject, (state, action) => {
      state.entities.push(action.error);
    });
  },
});

// dispatch(fetchUserById(123));
