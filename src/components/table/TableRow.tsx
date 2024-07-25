import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const tableRowStyle = css`
  border-bottom: 1px solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`

interface props {
  children: React.ReactNode
}

const TableRow = ({ children }: props) => {
  return <tr css={tableRowStyle}>{children}</tr>
}

export default TableRow
