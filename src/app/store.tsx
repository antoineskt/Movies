import { configureStore } from '@reduxjs/toolkit';
import { trendingApi } from '../features/movies/trendingApi';
import { multiSliceAPi } from '../features/movies/multiSlice';
import { movieSlice } from '../features/movies/movieSlice';

export const store = configureStore({
  reducer: {
    [trendingApi.reducerPath]: trendingApi.reducer,
    [multiSliceAPi.reducerPath]: multiSliceAPi.reducer,
    [movieSlice.reducerPath]: movieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trendingApi.middleware, multiSliceAPi.middleware, movieSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
