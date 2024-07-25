import React from 'react'
import { css } from '@emotion/react'

interface LargeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const inputStyles = css`
  width: 100%;
  padding: 12px 20px;
  height: 5rem;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 3rem;
  text-align: center;
`

const LargeInput: React.FC<LargeInputProps> = ({ label, value, onChange, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    // Only update state if the new value is a valid number
    if (/^\d*\.?\d*$/.test(newValue)) {
      onChange(event)
    }
  }
  return (
    <div>
      {label && <label>{label}</label>}
      <input css={inputStyles} value={value} onChange={handleChange} {...props} />
    </div>
  )
}

export default LargeInput
