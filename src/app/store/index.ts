import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./api/user-api";
import { postsApi } from "./api/posts-api";
import { mediaApi } from "./api/media-api";
import { galleriesApi } from "./api/galleries-api";

// slices
import userSlice from "./slices/user";
import effectsSlice from "./slices/effects";
import adminSlice from "./slices/admin";
import postsSlice from "./slices/posts";
import galleriesSlice from "./slices/galleries";

const rootReducer = combineReducers({
  userSlice: userSlice,
  effectsSlice: effectsSlice,
  adminSlice: adminSlice,
  postsSlice: postsSlice,
  galleriesSlice: galleriesSlice,
  // api reducers
  [userApi.reducerPath]: userApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
  [mediaApi.reducerPath]: mediaApi.reducer,
  [galleriesApi.reducerPath]: galleriesApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      postsApi.middleware,
      mediaApi.middleware,
      galleriesApi.middleware
    ),
});

export default store;

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
