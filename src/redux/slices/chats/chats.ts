import { createSlice } from '@reduxjs/toolkit';
import { getChatList, getMessages } from './actions';

export interface CounterState {
  list: any;
  loading: boolean;
  error: any;
  messagesChat: any;
}

const initialState: CounterState = {
  list: [],
  messagesChat: [],
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
    addMessage(state, action) {
      state.messagesChat.messages.unshift(action.payload);
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

export const { resetMessagesChat, addMessage } = chatsAuth.actions;

export default chatsAuth.reducer;
