import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000//api/v1/contact', 
    credentials: 'include', 
  }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    // Create message (for logged-in users)
    createMessage: builder.mutation({
      query: (formData) => ({
        url: '/create-message',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Contact'],
    }),

    // Get all messages (admin only)
    getAllMessages: builder.query({
      query: () => '/all',
      providesTags: ['Contact'],
    }),
  }),
});

export const {
  useCreateMessageMutation,
  useGetAllMessagesQuery,
} = contactApi;
