import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type ButtonProps = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const buttonStyle = css`
  background-color: #242424;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled, type = 'button' }) => {
  return (
    <button css={buttonStyle} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
