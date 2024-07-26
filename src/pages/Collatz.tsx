import React, { useState, useEffect } from 'react'
import styles from './algorithm.module.css'
import LargeInput from '../components/LargeInput'
import Button from '../components/Button'
import Card from '../components/Card'
const Collatz = () => {
  const [input, setInput] = useState<string>('')
  const [result, setResult] = useState<string>('')

  useEffect(() => {
    setResult('')
  }, [input])

  const collatzSteps = (n: number): number => {
    let steps = 0
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2
      } else {
        n = 3 * n + 1
      }
      steps++
    }
    return steps
  }

  const calculateCollatz = () => {
    const steps = collatzSteps(parseInt(input))
    setResult(steps.toString())
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculateCollatz()
    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Collatz Conjecture</p>
      <div className={styles.inputContainer}>
        <LargeInput
          label='enter your number'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button text='submit' onClick={calculateCollatz} />
      </div>
      <div className={styles.divider} />

      <div className={styles.resultContainer}>
        <p className={styles.resultTitle}>Result</p>
        <div className={styles.numbersContainer}>
          <Card text={result} />
        </div>
      </div>
    </div>
  )
}

export default Collatz
