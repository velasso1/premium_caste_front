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
import { setUserData } from "../slices/user";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>(
    fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL })
  ),
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserData(data.data.user_id));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    checkUserStatus: build.query<ICheckAdminResponse, ICheckAdminPayload>({
      query: (data) => ({
        url: import.meta.env.VITE_USERS_URL + data.userId + import.meta.env.VITE_IS_ADMIN,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
  }),
});

export const { useCreateAccountMutation, useLoginMutation, useLazyCheckUserStatusQuery, useGetUserInfoMutation } =
  userApi;
