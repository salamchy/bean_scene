import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../redux/services/authApi';
import authReducer from '../redux/features/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
