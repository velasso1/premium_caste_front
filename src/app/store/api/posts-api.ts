import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { CustomizedFetchBaseQueryError } from "../../types/api-response-types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
  endpoints: (build) => ({
    getPosts: build.query<void, void>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + "?status=published",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
