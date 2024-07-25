import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const tableHeaderStyle = css`
  background-color: #e6e6e6;
  color: #000;
  text-align: left;
  font-weight: bold;
`

interface props {
  children: React.ReactNode
}

const TableHeader = ({ children }: props) => {
  return <div css={tableHeaderStyle}>{children}</div>
}

export default TableHeader
