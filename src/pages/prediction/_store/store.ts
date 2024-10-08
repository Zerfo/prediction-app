import { create } from 'zustand'

import queryClient from '@/singletons/query-client'

import { getPredictions } from '../_api/getPredictions'

import { TPrediction } from '../_types/Prediction'

interface IPredictionState {
  predictions: TPrediction[],
  getPredictions: (text: string) => void,
}

const usePredictionStore = create<IPredictionState>((set) => ({
  predictions: [],
  getPredictions: async (text: string) => {
    const predictions = await queryClient.fetchQuery({
      queryKey:['get-predictions', text],
      queryFn: () => getPredictions(text)
    })

    return set(() => ({ predictions }))
  }
}))

export default usePredictionStore
