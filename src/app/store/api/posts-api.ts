import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { CustomizedFetchBaseQueryError, IAllPostsResponse, IPost } from "#types/api-response-types.ts";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
  endpoints: (build) => ({
    getPosts: build.query<IAllPostsResponse, void>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + "?status=draft",
        // credentials: "include",
      }),
    }),

    getCurrentPost: build.query<IPost, { post_id: string | undefined }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.post_id}`,
        // credentials: "include",
      }),
    }),

    // Возвращает список медиа-групп, привязанных к посту
    getMediaGroupsOfPost: build.query<void, { post_id: string | undefined }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.post_id}` + import.meta.env.VITE_GET_MEDIA_GROUPS,
        credentials: "include",
      }),
    }),

    // Возвращает список всех медиафайлов в группе
    getMediaGroup: build.query<void, { image_id: string | undefined }>({
      query: (data) => ({
        url: import.meta.env.VITE_GET_MEDIA + data.image_id,
        credentials: "include",
      }),
    }),

    createNewPost: build.mutation<void, void>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS,
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetCurrentPostQuery,
  useGetMediaGroupsOfPostQuery,
  useGetMediaGroupQuery,
  useCreateNewPostMutation,
} = postsApi;
