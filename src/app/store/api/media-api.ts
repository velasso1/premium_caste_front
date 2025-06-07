import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { CustomizedFetchBaseQueryError, IGetAllImagesResponse } from "#types/api-response-types.ts";

import { IUploadImagesPayload } from "#types/api-payload-types.ts";

export const mediaApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
  endpoints: (build) => ({
    getAllImages: build.query<IGetAllImagesResponse, void>({
      query: () => ({
        url: import.meta.env.VITE_GET_IMAGES,
        credentials: "include",
      }),
    }),

    uploadMedia: build.mutation<void, FormData>({
      query: (data) => ({
        url: import.meta.env.VITE_UPLOAD_MEDIA,
        method: "POST",
        credentials: "include",
        body: data,
      }),
    }),
  }),
});

export const { useGetAllImagesQuery, useUploadMediaMutation } = mediaApi;
