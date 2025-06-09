import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/user-api";
import { postsApi } from "./api/posts-api";
import { mediaApi } from "./api/media-api";

// slices
import userSlice from "./slices/user";
import effectsSlice from "./slices/effects";
import adminSlice from "./slices/admin";
import postsSlice from "./slices/posts";

const rootReducer = combineReducers({
  userSlice: userSlice,
  effectsSlice: effectsSlice,
  adminSlice: adminSlice,
  postsSlice: postsSlice,
  // api reducers
  [userApi.reducerPath]: userApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [mediaApi.reducerPath]: mediaApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, postsApi.middleware, mediaApi.middleware),
});

export default store;

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
