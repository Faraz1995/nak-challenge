import { Outlet, NavLink } from 'react-router-dom'
import styles from './layout.module.css'
const Layout = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.list}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              to={'/'}
            >
              List Item
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              to={'/fibonacci'}
            >
              Fibonacci
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
              to={'/collatz'}
            >
              Collatz Conjecture
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
