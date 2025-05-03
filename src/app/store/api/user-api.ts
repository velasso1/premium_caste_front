import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IRegistrationForm } from "#auth/components/registration-form/registration-form.tsx";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}` }),
  endpoints: (build) => ({
    createAccount: build.mutation<void, IRegistrationForm>({
      query: (data) => ({
        url: `${import.meta.env.VITE_REGISTRATION}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const { useCreateAccountMutation } = userApi;
