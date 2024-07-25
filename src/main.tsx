import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.tsx'
import './index.css'
import Home from './pages/Home.tsx'
import Fibonacci from './pages/Fibonacci.tsx'
import Collatz from './pages/Collatz.tsx'
import Item from './pages/Item.tsx'
import ErrorPage from './pages/ErrorPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route errorElement={<ErrorPage />} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'/items/new'} element={<Item />} />
          <Route path={'/items/:id'} element={<Item />} />
          <Route path='/fibonacci' element={<Fibonacci />} />
          <Route path='/collatz' element={<Collatz />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
