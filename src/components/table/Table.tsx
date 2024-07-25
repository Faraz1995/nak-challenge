import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const tableStyle = css`
  width: 100%;
  font-size: 1rem;
  min-width: 400px;
  overflow: hidden;
`

interface props {
  children: React.ReactNode
}

const Table = ({ children }: props) => {
  return <div css={tableStyle}>{children}</div>
}

export default Table
