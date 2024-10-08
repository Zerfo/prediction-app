import { z } from 'zod'

export const predictionSchema = z.object({
  text: z.string(),
  logProb: z.number(),
})

export type TPrediction = z.infer<typeof predictionSchema>
