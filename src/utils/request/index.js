import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: axiosBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => ({
        url: `pokemon/${name}`,
      }),
    }),
  }),
});

// Define a service using a base URL and expected endpoints
export default rootApi;

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = rootApi;
