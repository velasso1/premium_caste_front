import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  FetchArgs,
  RootState,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { logOut } from "../slices/user";

import {
  ILoginPayload,
  ICheckAdminPayload,
  IRegistrationPayload,
  IGetUserInfoPayload,
} from "#types/api-types/api-payload-types.ts";

import {
  IRegistrationResponse,
  ILoginResponse,
  ICheckAdminResponse,
  IGetUserInfoResponse,
  CustomizedFetchBaseQueryError,
} from "#types/api-types/api-response-types.ts";

import { setUserData, setExpiresSession } from "../slices/user";

import { EXPIRES_SESSION_TIME, USER_ID, REFRESH_TOKEN, ACCESS_TOKEN } from "#utils/constants.ts";

//  TESTING

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    // Попытка обновить токен
    const refreshResult = await baseQuery(
      {
        url: import.meta.env.VITE_REFRESH_TOKEN,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ refresh_token: localStorage.getItem(REFRESH_TOKEN) }),
      },
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const responseData = refreshResult.data as {
        user_id: string;
        access_token: string;
        refresh_token: string;
      };
      // Сохраняем новые токены
      localStorage.setItem(REFRESH_TOKEN, responseData.refresh_token);
      localStorage.setItem(ACCESS_TOKEN, responseData.access_token);
      // Повторяем оригинальный запрос с новым токеном
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Если обновление не удалось - разлогиниваем
      api.dispatch(logOut());
    }
  }

  return result;
};

// TESTING

export const userApi = createApi({
  reducerPath: "userApi",
  // baseQuery: <BaseQueryFn<string | FetchArgs, unknown, CustomizedFetchBaseQueryError, {}>>fetchBaseQuery({
  //   baseUrl: import.meta.env.VITE_BASE_URL,
  //   prepareHeaders: (headers) => {
  //     headers.set("Content-Type", "application/json");

  //     return headers;
  //   },
  // }),
  baseQuery: baseQueryWithReauth,
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
        headers: {
          "Content-Type": "application/json",
        },
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
          localStorage.setItem(ACCESS_TOKEN, data.data.access_token);
          localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token);
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
        headers: {
          "Content-Type": "application/json",
        },
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
    refreshToken: build.mutation<void, void>({
      query: (data) => ({
        url: import.meta.env.VITE_REFRESH_TOKEN,
        method: "POST",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCreateAccountMutation,
  useLoginMutation,
  useLazyCheckUserStatusQuery,
  useGetUserInfoMutation,
  useRefreshTokenMutation,
} = userApi;
