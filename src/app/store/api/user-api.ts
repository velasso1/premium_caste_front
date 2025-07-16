import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import {
  ILoginPayload,
  ICheckAdminPayload,
  IRegistrationPayload,
  IGetUserInfoPayload,
} from "#types/api-payload-types.ts";

import {
  IRegistrationResponse,
  ILoginResponse,
  ICheckAdminResponse,
  IGetUserInfoResponse,
  CustomizedFetchBaseQueryError,
} from "#types/api-response-types.ts";

import { setUserData, setExpiresSession } from "../slices/user";

import { EXPIRES_SESSION_TIME, USER_ID } from "#utils/constants.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: (build) => ({
    createAccount: build.mutation<IRegistrationResponse, IRegistrationPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_REGISTRATION,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    login: build.mutation<ILoginResponse, ILoginPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_LOGIN,
        credentials: "include",
        method: "POST",
        body: JSON.stringify(data),
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserData(data.data.user_id));
          dispatch(setExpiresSession(data.data.session.expires_at));
          localStorage.setItem(USER_ID, data.data.user_id);
          localStorage.setItem(EXPIRES_SESSION_TIME, data.data.session.expires_at);
        } catch (error) {
          console.error(error);
        }
      },
    }),

    checkUserStatus: build.query<ICheckAdminResponse, ICheckAdminPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_USERS_URL + data.user_id + import.meta.env.VITE_IS_ADMIN,
        credentials: "include",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserData(data.is_admin));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    getUserInfo: build.mutation<IGetUserInfoResponse, IGetUserInfoPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_GET_USER_INFO,
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
      }),

      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;
      //     dispatch(setUserData(data.is_admin));
      //   } catch (error) {
      //     console.error(error);
      //   }
      // },
    }),
  }),
});

export const { useCreateAccountMutation, useLoginMutation, useLazyCheckUserStatusQuery, useGetUserInfoMutation } =
  userApi;
