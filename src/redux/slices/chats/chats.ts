import { createSlice } from '@reduxjs/toolkit';
import { getChatList, getMessages } from './actions';

export interface CounterState {
  list: any;
  loading: boolean;
  error: any;
  isTabBarVisible: boolean;
  messagesChat: any;
}

const initialState: CounterState = {
  list: [],
  messagesChat: [],
  isTabBarVisible: false,
  loading: false,
  error: {},
};

const chatsAuth = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    resetMessagesChat(state) {
      state.messagesChat = [];
    },
  },
  extraReducers: builder => {
    // get all chats
    builder.addCase(getChatList.pending, state => {
      state.loading = true;
    });
    builder.addCase(getChatList.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(getChatList.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // get mesages current chat
    builder.addCase(getMessages.pending, state => {
      state.loading = true;
    });
    builder.addCase(getMessages.fulfilled, (state, action) => {
      state.messagesChat = action.payload;
      state.loading = false;
    });
    builder.addCase(getMessages.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const { resetMessagesChat } = chatsAuth.actions;

export default chatsAuth.reducer;
