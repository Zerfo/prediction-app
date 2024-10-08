import usePredictionStore from './store'

export const usePredictions = () => usePredictionStore((state) => state.predictions)

export const useGetPredictions = () => usePredictionStore((state) => state.getPredictions)
