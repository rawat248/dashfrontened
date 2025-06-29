import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["list", "sales", "break", "admin", "Dashboard"],
  endpoints: (build) => ({
    getUser: build.query({
      query: () => `general/list`,
      providesTags: ["list"],
    }),
    getSales: build.query({
      query: () => `sales/sales`,
      providesTags: ["sales"],
    }),
    getBreakdown: build.query({
      query: () => `sales/breakdown`,
      providesTags: ["break"],
    }),
    getAdmins: build.query({
      query: () => `management/admins`,
      providesTags: ["admin"],
    }),
    getDashboard: build.query({
      query: () => `general/dashboard`,
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetSalesQuery,
  useGetBreakdownQuery,
  useGetAdminsQuery,
  useGetDashboardQuery,
} = api;
