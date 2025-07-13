import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { ICreateGalleryPayload } from "#types/api-payload-types.ts";

import { CustomizedFetchBaseQueryError } from "#types/api-response-types.ts";

export const galleriesApi = createApi({
  reducerPath: "galleriesApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
  tagTypes: ["Images"],
  endpoints: (build) => ({
    // создание новой галереи
    createNewGallery: build.mutation<{ id: string }, ICreateGalleryPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateNewGalleryMutation } = galleriesApi;
