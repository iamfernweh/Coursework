import { configureStore } from '@reduxjs/toolkit';
import { postsApi } from '../api/postsApi';

//configure our redux store
export const store = configureStore({
  reducer: {
    //add slices here
    postsApi: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    //add middleware
    getDefaultMiddleware().concat(postsApi.middleware),
});
