import { combineReducers } from '@reduxjs/toolkit';

import userAuth from './slices/userAuth';
import getDocs from './slices/docs/docs';
import chats from './slices/chats/chats';

const rootReducer = combineReducers({
  userAuth,
  getDocs,
  chats,
});

export default rootReducer;
