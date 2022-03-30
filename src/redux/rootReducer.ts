import { combineReducers } from '@reduxjs/toolkit';

import userAuth from './slices/userAuth';

const rootReducer = combineReducers({
  userAuth,
});

export default rootReducer;
