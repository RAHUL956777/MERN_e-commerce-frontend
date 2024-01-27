import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllProductsResponse,
  CategoriesResponse,
  MessageResponse,
  NewProductRequest,
  SearchProductsRequest,
  SearchProductsResponse,
} from "../../types/api-types";


export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1/product/`,
  }),
  endpoints: (builder) => ({
    latestProducts: builder.query<AllProductsResponse, string>({
      query: () => "latest",
    }),
    allProducts: builder.query<AllProductsResponse, string>({
      query: (id) => `admin-products?id=${id}`,
    }),
    categories: builder.query<CategoriesResponse, string>({
      query: () => `categories`,
    }),
    searchProducts: builder.query<
      SearchProductsResponse,
      SearchProductsRequest
    >({
      query: ({ price, search, sort, category, page }) => {
        let base = `all?search=${search}&page=${page}`;

        if (price) base += `&price=${price}`;
        if (sort) base += `&sort=${sort}`;
        if (category) base += `&category=${category}`;

        return base;
      },
    }),
    newProduct: builder.mutation<MessageResponse, NewProductRequest>({
      query: ({FormData,id}) => ({
        url:`new?id=${id}`,
        SignInMethod : 'POST',
        body: FormData,
      }),
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
  useSearchProductsQuery,
  useNewProductMutation,
} = productAPI;
