import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { CustomizedFetchBaseQueryError, IAllPostsResponse, IPost } from "#types/api-response-types.ts";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<IAllPostsResponse, { postStatus: "published" | "draft" | "archived" }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `?status=${data.postStatus}`,
        // credentials: "include",
      }),
      keepUnusedDataFor: 0,
      providesTags: (result, error, arg) =>
        result ? [...result.posts.map(({ id }) => ({ type: "Posts" as const, id })), "Posts"] : ["Posts"],
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

    createNewPost: build.mutation<void, IPostInfoPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS,
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
        invalidatesTags: ["Posts"],
      }),
    }),

    publishPost: build.mutation<void, { postId: string }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.postId}` + import.meta.env.VITE_PUBLISH_POST,
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        invalidatesTags: ["Posts"],
      }),
    }),

    archivePost: build.mutation<void, { postId: string }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.postId}` + import.meta.env.VITE_ARCHIVE_POST,
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        invalidatesTags: ["Posts"],
      }),
    }),

    deletePost: build.mutation<void, { postId: string }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.postId}`,
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        invalidatesTags: ["Posts"],
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
  usePublishPostMutation,
  useArchivePostMutation,
  useDeletePostMutation,
} = postsApi;
