// redux/services/authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/user',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
