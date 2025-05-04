import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRegistrationPayload } from "../../types/store-types/form-types";
import { ILoginPayload } from "../../types/store-types/form-types";

import { IRegistrationResponse, ILoginResponse } from "../../types/general-types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const { useCreateAccountMutation, useLoginMutation } = userApi;
