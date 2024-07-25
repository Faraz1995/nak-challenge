import React from 'react'
import { css } from '@emotion/react'

const tableCellStyle = css`
  padding: 12px 15px;
`

interface props {
  children: React.ReactNode
}

const TableCell = ({ children }: props) => {
  return <div css={tableCellStyle}>{children}</div>
}

export default TableCell
