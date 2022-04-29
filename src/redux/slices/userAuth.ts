import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/types/types-external';

import { apiHost } from '../../api/axios';

interface iParams {
  email: string;
  password: string;
}

export const fetchUserAuth = createAsyncThunk(
  '/auth',
  async ({ email, password }: iParams, thunkApi) => {
    try {
      const { data, headers } = await apiHost.post('/Account/MobileLogin', {
        email,
        password,
      });
      await AsyncStorage.setItem('token', headers.xauthtoken);
      await AsyncStorage.setItem('refreshToken', headers.xauthrefreshtoken);
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export interface CounterState {
  isLogin: boolean;
  status: WritableDraft<Object> | undefined;
  loading: boolean;
  login: string | null;
}

const initialState: CounterState = {
  isLogin: false,
  login: null,
  status: {},
  loading: false,
};

const usersAuth = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    Login: state => {
      state.login = '';
      state.isLogin = true;
    },
    notLogin: state => {
      state.login = '';
      state.isLogin = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserAuth.pending, (state, action) => {
      state.status = action.payload;
    });

    builder.addCase(fetchUserAuth.fulfilled, (state, action) => {
      state.status = action.payload;
      state.isLogin = true;
    });

    builder.addCase(fetchUserAuth.rejected, (state, action) => {
      state.status = action.payload;
    });
  },
});

export const { Login, notLogin } = usersAuth.actions;

export default usersAuth.reducer;
