import { combineReducers } from '@reduxjs/toolkit';

import userAuth from './slices/userAuth';
import getDocs from './slices/docs';

const rootReducer = combineReducers({
  userAuth,
  getDocs,
});

export default rootReducer;
