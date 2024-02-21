import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/' }),
  tagTypes: ['Orders'],
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => 'history',
      providesTags: ['Orders']
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: 'order',
        body: order,
        method: 'POST'
      }),
      invalidatesTags: ['Orders']
    })
  })
})

export const {
  useGetOrdersQuery, useCreateOrderMutation
} = pizzaApi
