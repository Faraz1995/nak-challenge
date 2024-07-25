import React, { useState } from 'react'
import styles from './algorithm.module.css'
import LargeInput from '../components/LargeInput'
import Button from '../components/Button'
import Card from '../components/Card'
const Fibonacci = () => {
  const [input, setInput] = useState('')

  const calculateFibonacci = () => {
    console.log('hi')
  }
  return (
    <div className={styles.container}>
      <p className={styles.title}>Fibonacci</p>
      <div className={styles.inputContainer}>
        <LargeInput
          label='enter your number'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button text='submit' onClick={calculateFibonacci} />
      </div>
      <div className={styles.divider} />

      <div className={styles.resultContainer}>
        <p className={styles.resultTitle}>Result</p>
        <div className={styles.numbersContainer}>
          <Card />
          <Card text={input} />
          <Card />
        </div>
      </div>
      <p className={styles.number}>Your Number</p>
    </div>
  )
}

export default Fibonacci
