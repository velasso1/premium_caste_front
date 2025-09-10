import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { CustomizedFetchBaseQueryError, IAllPostsResponse, IPost } from "#types/api-types/api-response-types.ts";
import { IGetPostsPayload } from "#types/api-types/api-payload-types.ts";
import { IPostInfoPayload } from "#types/store-types/posts-initial-state-types.ts";

import { baseQueryWithReauth } from "./user-api";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQueryWithReauth,
  // baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
  //   fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  // ),
  tagTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query<IAllPostsResponse, IGetPostsPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS,
        params: { status: data.postStatus },
      }),
      keepUnusedDataFor: 0,
      providesTags: (result, error, arg) =>
        result ? [...result.posts.map(({ id }) => ({ type: "Posts" as const, id })), "Posts"] : ["Posts"],
    }),

    // возвращает пост по id
    getCurrentPost: build.query<IPost, { post_id: string | undefined }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.post_id}`,
        keepUnusedDataFor: 0,
        refetchOnMountOrArgChange: true,
        // invalidatesTags: ["Posts"],
      }),
    }),

    // Возвращает список медиа-групп, привязанных к посту
    getMediaGroupsOfPost: build.query<void, { post_id: string | undefined }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.post_id}` + import.meta.env.VITE_GET_MEDIA_GROUPS,
        credentials: "include",
        params: { relation_type: "content" },
      }),
    }),

    // Возвращает список всех медиафайлов в группе
    getMediaGroup: build.query<void, { post_id: string | undefined }>({
      query: (data) => ({
        url: import.meta.env.VITE_GET_MEDIA + data.post_id,
        credentials: "include",
      }),
    }),

    createNewPost: build.mutation<IPost, IPostInfoPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS,
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Posts"],
    }),

    // перевод поста в статус "опубликован"
    publishPost: build.mutation<void, { postId: string }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.postId}` + import.meta.env.VITE_PUBLISH_POST,
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Posts"],
    }),

    // перевод поста в статус "архивирован"
    archivePost: build.mutation<void, { postId: string }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.postId}` + import.meta.env.VITE_ARCHIVE_POST,
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Posts"],
    }),

    deletePost: build.mutation<void, { postId: string }>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.postId}`,
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Posts"],
    }),

    // изменение поста
    updatePost: build.mutation<IPost, IPostInfoPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.id}`,
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        // keepUnusedDataFor: 0,
      }),

      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetCurrentPostQuery,
  useGetMediaGroupsOfPostQuery,
  useGetMediaGroupQuery,
  useCreateNewPostMutation,
  usePublishPostMutation,
  useArchivePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = postsApi;
