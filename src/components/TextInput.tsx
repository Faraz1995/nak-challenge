import { FC, ChangeEvent } from 'react'
import { css } from '@emotion/react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
interface TextInputProps {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  name?: string
  label?: string
  required?: boolean
  register?: UseFormRegisterReturn
  error?: FieldError // Define the error prop type
}

const inputStyle = css`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #0077ff;
    outline: none;
  }
`

const labelStyle = css`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

const containerStyle = css`
  margin-bottom: 20px;
  flex: 1;
  max-width: 400px;
`

const starStyle = css`
  color: red;
  margin-left: 5px;
`

const TextInput: FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  name,
  required,
  register,
  error
}) => (
  <div css={containerStyle}>
    {label && (
      <label css={labelStyle}>
        {label}
        {required && <span css={starStyle}>*</span>}
      </label>
    )}
    <input
      type='text'
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      css={inputStyle}
      {...register}
    />
    {error && <span>{error.message}</span>} {/* Conditionally render error message */}
  </div>
)

export default TextInput
