// trendingSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { headersApi } from '../api.config';
import { FetchResult, MovieType, SerieType, Media_typeType } from '../../type/type';

type fetchTrendingType = {
  mediaType: Media_typeType;
  date: 'day' | 'week';
};

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const trendingApi = createApi({
  reducerPath: 'trendingApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: headersApi }),
  endpoints: (builder) => ({
    getTrending: builder.query<FetchResult<MovieType & SerieType>, fetchTrendingType>({
      query: ({ mediaType, date }) => `trending/${mediaType}/${date}?language=fr-EU`,
    }), // the end of the query
  }),
});

export const { useGetTrendingQuery } = trendingApi;
