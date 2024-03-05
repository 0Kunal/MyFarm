import {configureStore} from '@reduxjs/toolkit';
import authSlice from '../slice/auth';

let Store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export default Store;
