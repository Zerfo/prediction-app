import {
  QueryClient as TanstackQueryClient,
} from '@tanstack/react-query'

const queryClient = new TanstackQueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export default queryClient