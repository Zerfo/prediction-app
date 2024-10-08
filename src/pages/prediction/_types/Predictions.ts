import { z } from 'zod'

import { predictionSchema } from './Prediction'

export const predictionsSchema = z.object({
  results: z.array(predictionSchema).default([]),
})

export type TPredictions = z.infer<typeof predictionsSchema>
