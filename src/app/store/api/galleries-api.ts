import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { ICreateGalleryPayload } from "#types/api-payload-types.ts";
import { IGetAllGalleriesResponse, IGalleryResponse } from "#types/api-response-types.ts";

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
      providesTags: (result) =>
        result
          ? // Добавляем теги для каждой галереи + общий тег
            [
              ...result.galleries.map(({ id }) => ({ type: "Galleries" as const, id })),
              { type: "Galleries", id: "LIST" },
            ]
          : [{ type: "Galleries", id: "LIST" }],
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
    getGalleryById: build.query<IGalleryResponse, { id: string }>({
      query: (payload) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION + `/${payload.id}`,
      }),
    }),
    // возвращает галерею по тегу
    getGalleryByTag: build.query<IGetAllGalleriesResponse, { tag: string | string[] }>({
      query: (payload) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION + "/by-tags",
        params: {
          tags: [payload.tag],
          // match_all: true,
        },
      }),
    }),
    // удаление галерии по id
    deleteGallery: build.mutation<void, { id: string }>({
      query: (payload) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION + `/${payload.id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Galleries", id: arg.id }, // Инвалидируем конкретную галерею
        { type: "Galleries", id: "LIST" }, // Инвалидируем весь список
      ],
    }),

    editGallery: build.mutation<void, ICreateGalleryPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_GALLERIES_ACTION + `/${data.id}`,
        method: "PUT",
        credentials: "include",
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["Galleries"],
    }),
  }),
});

export const {
  useCreateNewGalleryMutation,
  useGetAllGalleriesQuery,
  useGetGalleryByIdQuery,
  useLazyGetGalleryByTagQuery,
  useDeleteGalleryMutation,
  useEditGalleryMutation,
} = galleriesApi;
