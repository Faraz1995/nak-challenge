import React from 'react'
import { css } from '@emotion/react'

const tableHeadCellStyle = css`
  padding: 12px 15px;
`

interface props {
  children: React.ReactNode
}

const TableHead = ({ children }: props) => {
  return <div css={tableHeadCellStyle}>{children}</div>
}

export default TableHead
