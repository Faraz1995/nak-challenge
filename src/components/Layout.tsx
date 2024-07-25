import { Outlet, NavLink } from 'react-router-dom'
import styles from './layout.module.css'
import { useLocation } from 'react-router-dom'
const Layout = () => {
  const location = useLocation()

  const checkActiveItemLink = () => {
    const { pathname } = location
    if (pathname.includes('/items')) {
      return styles.activeLink
    } else {
      return styles.link
    }
  }
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.list}>
            <NavLink className={checkActiveItemLink()} to={'/'}>
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
