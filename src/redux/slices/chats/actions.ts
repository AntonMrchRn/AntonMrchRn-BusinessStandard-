import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../api/axios/axiosInstance';

export const getChatList = createAsyncThunk(
  'chats/getChatList',
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.get('/mapi/dialog/list', {
        params: { selectedCompanyId: id },
      });

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({
        error: error.message,
      });
    }
  }
);

export const getMessages: any = createAsyncThunk(
  'chats/getMessages',
  async (id, thunkApi) => {
    try {
      const { data } = await axiosInstance.get('/mapi/dialog/get', {
        params: { dialogId: id },
      });

      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue({
        error: error.message,
      });
    }
  }
);
