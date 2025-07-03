import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:5000/api/v1/menu',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ['Menu'],
  endpoints: (builder) => ({
    // Create Menu Item
    createMenu: builder.mutation({
      query: (formData) => ({
        url: '/create-menu',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Menu']
    }),

    // Get All Menu Items (Public)
    getAllMenu: builder.query({
      query: ({ page = 1, limit = 10, category }) => ({
        url: '/list',
        method: 'POST',
        body: { page, limit, category }
      }),
      providesTags: ['Menu']
    }),

    // Get Admin Menu List (Protected)
    getAdminMenu: builder.query({
      query: () => ({
        url: '/admin-list',
        method: 'POST'
      }),
      providesTags: ['Menu']
    }),

    // Update Menu Item (Protected)
    updateMenu: builder.mutation({
      query: ({ id, ...updates }) => ({
        url: '/update',
        method: 'POST',
        body: updates
      }),
      invalidatesTags: ['Menu']
    }),

    // Delete Menu Item (Protected)
    deleteMenu: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Menu']
    })
  })
});

export const {
  useCreateMenuMutation,
  useGetAllMenuQuery,
  useGetAdminMenuQuery,
  useUpdateMenuMutation,
  useDeleteMenuMutation
} = menuApi;