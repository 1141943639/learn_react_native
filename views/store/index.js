import { configureStore, legacy_createStore as createStore } from '@reduxjs/toolkit';
import globalEvent from './slice/globalEvent';

const store = configureStore({
  reducer: {
    globalEvent,
  },
});

export default store;
