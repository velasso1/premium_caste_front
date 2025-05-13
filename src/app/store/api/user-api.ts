import { BaseQueryFn, createApi, fetchBaseQuery, FetchArgs, RootState } from "@reduxjs/toolkit/query/react";

import { IRegistrationPayload } from "../../types/store-types/form-types";
import { ILoginPayload } from "../../types/store-types/form-types";

import { IRegistrationResponse, ILoginResponse } from "../../types/general-types";
// import { setUserData } from "../slices/user";

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
        credentials: "include",
        url: import.meta.env.VITE_LOGIN,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
      //   try {
      //     const { data } = await queryFulfilled;
      //     dispatch(setUserData(data.data));
      //   } catch (error) {
      //     console.error(error);
      //   }
      // },
    }),

    checkUserStatus: build.query<{ data: { access_token: string } }, void>({
      query: (data) => ({
        url: import.meta.env.VITE_USERS_URL + `daae6041-7dfb-4203-b287-057bb65821fe` + import.meta.env.VITE_IS_ADMIN,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCreateAccountMutation, useLoginMutation, useLazyCheckUserStatusQuery } = userApi;
