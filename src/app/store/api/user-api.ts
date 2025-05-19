import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { ILoginPayload, ICheckAdminPayload, IRegistrationPayload } from "../../types/store-types/form-types";

import { IRegistrationResponse, ILoginResponse, ICheckAdminResponse } from "../../types/general-types";
import { setUserData } from "../slices/user";

type CustomizedFetchBaseQueryError = {
  status?: number;
  data: { details: string; error: string; status: string };
};

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
  }),
});

export const { useCreateAccountMutation, useLoginMutation, useLazyCheckUserStatusQuery } = userApi;
