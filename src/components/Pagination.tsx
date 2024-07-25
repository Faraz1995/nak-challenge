import { css } from '@emotion/react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onNextPage: () => void
  onPrevPage: () => void
}

const paginationStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0;
`

const buttonStyle = css`
  padding: 10px 20px;
  margin: 0 5px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage
}) => (
  <div css={paginationStyle}>
    <button onClick={onPrevPage} css={buttonStyle} disabled={currentPage === 1}>
      Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button onClick={onNextPage} css={buttonStyle} disabled={currentPage === totalPages}>
      Next
    </button>
  </div>
)

export default Pagination
