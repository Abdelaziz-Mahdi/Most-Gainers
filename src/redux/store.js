import { configureStore } from '@reduxjs/toolkit';
import gainersReducer from './gainersSlice';

const store = configureStore({
  reducer: {
    gainers: gainersReducer,
  },
});
export default store;
