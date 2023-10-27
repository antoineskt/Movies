import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  FetchResult,
  MultiSearchDataType,
  QuerySearchType,
  SearchByMediaAndTextType,
  SearchQueryType,
} from '../../type/type';
import { headersApi } from '../api.config';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const multiSliceAPi = createApi({
  reducerPath: 'multiSearch',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: headersApi,
  }),
  endpoints: (builder) => ({
    SearchByText: builder.query<FetchResult<MultiSearchDataType>, QuerySearchType>({
      query: ({ search, currentPage = 1 }) =>
        `search/multi?query=${search}&include_adult=false&page=${currentPage}&language=fr-EU`,
    }),
    searchByMediaTypeAndText: builder.query<FetchResult<SearchQueryType>, SearchByMediaAndTextType>({
      query: ({ query, mediaType, currentPage = 1 }) =>
        `search/${mediaType}?query=${query}&include_adult=false&language=fr-EU&page=${currentPage}`,
    }),
  }),
});

export const { useSearchByTextQuery, useSearchByMediaTypeAndTextQuery } = multiSliceAPi;
