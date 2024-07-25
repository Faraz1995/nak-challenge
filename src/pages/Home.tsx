import React from 'react'
import styles from './home.module.css'
import Table from '../components/table/Table'
import TableHeader from '../components/table/TableHeader'
import TableRow from '../components/table/TableRow'
import TableHead from '../components/table/TableHead'
import TableCell from '../components/table/TableCell'
import { mockData } from '../assets/mockData'

const Home: React.FC = () => {
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
          {mockData.map((item) => (
            <TableRow key={item.item}>
              <TableCell>{item.item}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>@{item.username}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </Table>
      </div>
    </div>
  )
}

export default Home
