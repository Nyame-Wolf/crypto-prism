import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './coins/coinsReducer';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});

export default store;
