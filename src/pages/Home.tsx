import React, { useState } from 'react'
import styles from './home.module.css'
import Table from '../components/table/Table'
import TableHeader from '../components/table/TableHeader'
import TableRow from '../components/table/TableRow'
import TableHead from '../components/table/TableHead'
import TableCell from '../components/table/TableCell'
import { mockData } from '../assets/mockData'
import Pagination from '../components/Pagination'

const itemsPerPage: number = 5

const Home: React.FC = () => {
  const [page, setPage] = useState<number>(1)

  const indexOfLastItem = page * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(mockData.length / itemsPerPage)

  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div>
      <p className={styles.title}>
        <span className={styles.listTitle}>List </span>Item
      </p>
      <div className={styles.tableContainer}>
        <div className={styles.itemTitle}>
          <p>Items</p>
          <div>Add new Item +</div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          {currentItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>@{item.username}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
      </div>
    </div>
  )
}

export default Home
