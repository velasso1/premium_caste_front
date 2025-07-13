import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { ICreateGalleryPayload } from "#types/api-payload-types.ts";
import { IGetAllGalleriesResponse } from "#types/api-response-types.ts";

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

    getAllGalleries: build.query<IGetAllGalleriesResponse, { status: "published"; page: string; per_page: string }>({
      query: (data) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION,
        params: {
          status: data.status,
          page: data.page,
          per_page: data.per_page,
        },
        credentials: "include",
      }),
    }),
  }),
});

export const { useCreateNewGalleryMutation, useGetAllGalleriesQuery } = galleriesApi;
