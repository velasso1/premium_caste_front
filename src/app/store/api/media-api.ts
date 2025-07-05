import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { CustomizedFetchBaseQueryError, IGetAllImagesResponse } from "#types/api-response-types.ts";

import {
  IUploadImagesPayload,
  IAttachMediaToGroupPayload,
  IAttachMediaGroupToPostPayload,
  ICreateMediaGroupPayload,
} from "#types/api-payload-types.ts";

export const mediaApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
  tagTypes: ["Images"],
  endpoints: (build) => ({
    // получение всех загруженных картинок
    getAllImages: build.query<IGetAllImagesResponse, void>({
      query: () => ({
        url: import.meta.env.VITE_GET_IMAGES,
        credentials: "include",
      }),
      keepUnusedDataFor: 0,
      providesTags: (result, error, arg) =>
        result ? [...result.data.map(({ id }) => ({ type: "Images" as const, id })), "Images"] : ["Images"],
    }),

    // загружает одну картинку (в FormData поле 'file')
    uploadMedia: build.mutation<void, FormData>({
      query: (data) => ({
        url: import.meta.env.VITE_UPLOAD_MEDIA,
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["Images"],
    }),

    // создает группу для картинок
    createMediaGroup: build.mutation<{ data: string }, ICreateMediaGroupPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_CREATE_MEDIA_GROUP,
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),

    // связывает несколько картинок в одну группу
    attachMediaToGroup: build.mutation<void, IAttachMediaToGroupPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_GET_MEDIA + "attach",
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),

    // связывает группу картинок с постом
    attachMediaGroupToPost: build.mutation<void, IAttachMediaGroupToPostPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_POST_ACTIONS + `/${data.post_id}` + import.meta.env.VITE_ATTACH_MEDIA_TO_POST,
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, relation_type: "content" }),
      }),
    }),
  }),
});

export const {
  useGetAllImagesQuery,
  useUploadMediaMutation,
  useCreateMediaGroupMutation,
  useAttachMediaToGroupMutation,
  useAttachMediaGroupToPostMutation,
} = mediaApi;
