import React, { useEffect, useState } from 'react'
import styles from './algorithm.module.css'
import LargeInput from '../components/LargeInput'
import Button from '../components/Button'
import Card from '../components/Card'
const Fibonacci = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = React.useState<[string, string]>(['-', '-'])

  useEffect(() => {
    setResult(['-', '-'])
  }, [input])

  const generateFibonacciUpTo = (limit: number): number[] => {
    const fibonacciSequence = [0, 1]
    let next =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2]

    while (next <= limit) {
      fibonacciSequence.push(next)
      next =
        fibonacciSequence[fibonacciSequence.length - 1] +
        fibonacciSequence[fibonacciSequence.length - 2]
    }

    return fibonacciSequence
  }

  const findPrevAndNextFibonacci = (num: number): [string, string] => {
    const fibonacciSeq = generateFibonacciUpTo(num)
    let previous = 0
    let next = 1
    const indexNum = fibonacciSeq.indexOf(num)
    if (indexNum !== -1) {
      previous = fibonacciSeq[indexNum - 1] ? fibonacciSeq[indexNum - 1] : 0
      next = previous === 0 ? 1 : previous + num
    } else {
      previous = fibonacciSeq[fibonacciSeq.length - 1]
      next = fibonacciSeq[fibonacciSeq.length - 1] + fibonacciSeq[fibonacciSeq.length - 2]
    }

    return [previous.toString(), next.toString()]
  }

  const calculateFibonacci = () => {
    const answer = findPrevAndNextFibonacci(parseInt(input))
    setResult(answer)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      calculateFibonacci()
    }
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>Fibonacci</p>
      <div className={styles.inputContainer}>
        <LargeInput
          label='enter your number'
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button text='submit' onClick={calculateFibonacci} />
      </div>
      <div className={styles.divider} />

      <div className={styles.resultContainer}>
        <p className={styles.resultTitle}>Result</p>
        <div className={styles.numbersContainer}>
          <Card text={result[0].toString()} />
          <Card text={input} />
          <Card text={result[1].toString()} />
        </div>
      </div>
      <p className={styles.number}>Your Number</p>
    </div>
  )
}

export default Fibonacci
