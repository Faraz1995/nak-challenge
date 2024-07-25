import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const tableHeaderStyle = css`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
`

interface props {
  children: React.ReactNode
}

const TableHead = ({ children }: props) => {
  return <thead css={tableHeaderStyle}>{children}</thead>
}

export default TableHead
