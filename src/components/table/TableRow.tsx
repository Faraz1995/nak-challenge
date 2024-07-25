import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const tableRowStyle = css`
  width: 100%;
  border-bottom: 1px solid #dddddd;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  // &:nth-of-type(even) {
  //   background-color: #f3f3f3;
  // }
`

interface props {
  children: React.ReactNode
}

const TableRow = ({ children }: props) => {
  return <div css={tableRowStyle}>{children}</div>
}

export default TableRow
