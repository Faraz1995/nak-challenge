import React from 'react'
import { css } from '@emotion/react'
import { UseFormRegisterReturn } from 'react-hook-form'

// Define the styles for the select dropdown and label using Emotion
const containerStyles = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
  max-width: 400px;
`

const labelStyles = css`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

const selectStyles = css`
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  width: 100%;
`

const optionStyles = css`
  padding: 8px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #ccc;
  }
`

// Define types for props
type Option = {
  value: string
  label: string
}

type SelectProps = {
  label: string
  name: string
  options: Option[]
  value?: string
  register: (name: string) => UseFormRegisterReturn
}

// Select component
const Select: React.FC<SelectProps> = ({ label, name, options, register }) => {
  return (
    <div css={containerStyles}>
      <label css={labelStyles} htmlFor={name}>
        {label}
      </label>
      <select css={selectStyles} id={name} {...register(name)}>
        {options.map((item) => (
          <option css={optionStyles} key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
