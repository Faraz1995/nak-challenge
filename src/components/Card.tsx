import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

type ButtonProps = {
  text?: string
}

const buttonStyle = css`
  width: 100%;
  text-align: center;
  background-color: #f1f1f1;
  color: black;
  border-radius: 15px;
  font-size: 2.5rem;
  border: 1px solid #cccccc;
  padding-top: 2rem;
  padding-bottom: 2rem;
`

const Card: React.FC<ButtonProps> = ({ text }) => {
  return <div css={buttonStyle}>{text ? text : '-'}</div>
}

export default Card
