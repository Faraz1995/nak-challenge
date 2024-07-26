import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'
import Table from '../components/table/Table'
import TableHeader from '../components/table/TableHeader'
import TableRow from '../components/table/TableRow'
import TableHead from '../components/table/TableHead'
import TableCell from '../components/table/TableCell'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'
import { useUserStore } from '../store/useStore'
import { Status } from '../types/users'

const itemsPerPage: number = 5

const Home: React.FC = () => {
  const navigate = useNavigate()
  const users = useUserStore((state) => state.users)

  const [page, setPage] = useState<number>(1)

  const indexOfLastItem = page * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentItems = users!.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(users!.length / itemsPerPage)

  const handleNextPage = () => {
    setPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }

  const statusClassGenerator = (status: Status) => {
    switch (status) {
      case 'active':
        return styles.activeStatus
      case 'not_active':
        return styles.inActiveStatus
      default:
        return styles.unknwonStatus
    }
  }

  const statusTextGenerator = (status: Status) => {
    switch (status) {
      case 'active':
        return 'Active'
      case 'not_active':
        return 'Not Active'
      default:
        return 'Unknown'
    }
  }

  return (
    <div>
      <p className={styles.title}>
        <span className={styles.listTitle}>List </span>Item
      </p>
      <div className={styles.tableContainer}>
        <div className={styles.itemTitle}>
          <p>Items</p>
          <div onClick={() => navigate('/items/new')} className={styles.addBtn}>
            Add new Item +
          </div>
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
            <Link key={item.id} to={`/items/${item.id}`}>
              <TableRow>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>@{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>
                  <div
                    className={`${styles.statusContainer} ${statusClassGenerator(
                      item.status
                    )}`}
                  >
                    {statusTextGenerator(item.status)}
                  </div>
                </TableCell>
              </TableRow>
            </Link>
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
