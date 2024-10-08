import ky from '@/singletons/ky';

import { predictionsSchema } from '../_types/Predictions';

export const getPredictions = async (text: string) => {
  const data = await ky
    .get(`https://api.imagineville.org/word/predict?left=${text}`)
    .json();

  const { results } = predictionsSchema.parse(data);

  return results;
};