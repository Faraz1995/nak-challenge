import React, { useState } from 'react'
import { css } from '@emotion/react'

interface LargeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const inputStyles = css`
  width: 100%;
  padding: 12px 20px;
  height: 5rem;
  margin: 8px 0;
  margin-bottom: 0;
  box-sizing: border-box;
  font-size: 3rem;
  text-align: center;
`

const errorStyles = css`
  color: red;
  margin-bottom: 10px;
`

const LargeInput: React.FC<LargeInputProps> = ({
  label,
  value,
  onChange,
  onKeyPress,
  ...props
}) => {
  const [error, setError] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    // Only update state if the new value is a valid number
    if (/^\d*\.?\d*$/.test(newValue)) {
      onChange(event)
      setError(false)
    } else {
      setError(true)
    }
  }
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        css={inputStyles}
        value={value}
        onKeyPress={onKeyPress}
        onChange={handleChange}
        {...props}
      />
      {error && <p css={errorStyles}>only numbers are valid</p>}
    </div>
  )
}

export default LargeInput
