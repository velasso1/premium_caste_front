import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { ICreateGalleryPayload } from "#types/api-payload-types.ts";
import { IGetAllGalleriesResponse } from "#types/api-response-types.ts";

import { CustomizedFetchBaseQueryError } from "#types/api-response-types.ts";

export const galleriesApi = createApi({
  reducerPath: "galleriesApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
  tagTypes: ["Galleries"],
  endpoints: (build) => ({
    getAllGalleries: build.query<IGetAllGalleriesResponse, { status: "published"; page: string; per_page: string }>({
      query: (payload) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION,
        params: {
          status: payload.status,
          page: payload.page,
          per_page: payload.per_page,
        },
        credentials: "include",
      }),
      keepUnusedDataFor: 0,
      providesTags: (result, error, arg) =>
        result
          ? [...result.galleries.map(({ id }) => ({ type: "Galleries" as const, id })), "Galleries"]
          : ["Galleries"],
    }),

    // создание новой галереи
    createNewGallery: build.mutation<{ id: string }, ICreateGalleryPayload>({
      query: (payload) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      }),
      invalidatesTags: ["Galleries"],
    }),

    // возвращает галерею по id
    getCurrentGallery: build.query<void, { id: string }>({
      query: (payload) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION + `${payload.id}`,
      }),
    }),
    // возвращает галерею по тегу
    getGalleryByTag: build.query<IGetAllGalleriesResponse, { tag: string }>({
      query: (payload) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION + "/by-tags",
        params: {
          tags: [payload.tag],
          // match_all: true,
        },
      }),
    }),
  }),
});

export const {
  useCreateNewGalleryMutation,
  useGetAllGalleriesQuery,
  useGetCurrentGalleryQuery,
  useLazyGetGalleryByTagQuery,
} = galleriesApi;
