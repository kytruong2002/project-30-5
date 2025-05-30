import { cacheExchange, createClient, fetchExchange } from 'urql'

const queryClient = createClient({
  url: import.meta.env.VITE_API_URL_GRAPHQL,
  fetchOptions: {
    headers: {
      Authorization: import.meta.env.VITE_API_KEY
    }
  },

  exchanges: [cacheExchange, fetchExchange]
})

export default queryClient
