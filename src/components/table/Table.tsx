import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`

interface props {
  children: React.ReactNode
}

const Table = ({ children }: props) => {
  return <table css={tableStyle}>{children}</table>
}

export default Table
