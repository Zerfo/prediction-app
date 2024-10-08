import { memo, useCallback, useState } from 'react'

import { useDebouncedCallback } from 'use-debounce'

import { useGetPredictions, usePredictions } from './_store'

import styles from './_styles/styles.module.scss'

function Prediction() {
  const predictions = usePredictions()
  const getPredictions = useGetPredictions()

  const [value, setValue] = useState<string>('')

  const handleGetPredictions = useDebouncedCallback((text: string) => {
    getPredictions(text)
  }, 300)

  const handleChange = (text: string) => {
    setValue(text)
    handleGetPredictions(text)
  }

  const handlePredictionClick = useCallback((text: string) => {
    const newValue = (value + ' ' + text).replace(/ +/g, ' ').trim()

    setValue(newValue)
    getPredictions(newValue)
  }, [value, getPredictions])



  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Предективный набор текста</h4>

      <textarea className={styles.textarea} value={value} onChange={e => handleChange(e.target.value)} placeholder='Начните вводить текст...' />

      <div className={styles.predictions}>
        {predictions.map((prediction) => (
          <button key={prediction.logProb} className={styles.prediction} onClick={() => handlePredictionClick(prediction.text)}>{prediction.text}</button>
        ))}
      </div>
    </div>
  )
}

export default memo(Prediction)