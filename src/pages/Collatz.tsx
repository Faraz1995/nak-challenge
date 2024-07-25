import React, { useState } from 'react'
import styles from './algorithm.module.css'
import LargeInput from '../components/LargeInput'
import Button from '../components/Button'
import Card from '../components/Card'
const Collatz = () => {
  const [input, setInput] = useState('')

  const calculateCollatz = () => {
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
        <Button text='submit' onClick={calculateCollatz} />
      </div>
      <div className={styles.divider} />

      <div className={styles.resultContainer}>
        <p className={styles.resultTitle}>Result</p>
        <div className={styles.numbersContainer}>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Collatz
