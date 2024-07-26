import React from 'react'
import { css } from '@emotion/react'

const tableHeaderStyle = css`
  width: 100%;
  overflow-x: auto;
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
