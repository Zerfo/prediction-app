import { memo } from 'react'

import {
  QueryClientProvider,
} from '@tanstack/react-query'

import Prediction from "@/pages/prediction";

import queryClient from "@/singletons/query-client"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Prediction />
    </QueryClientProvider>
  )
}

export default memo(App)