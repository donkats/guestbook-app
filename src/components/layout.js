import React from 'react'
import Navbar from './navbar'
import './style.scss';

const Layout = ({ children }) => (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
    </div>
  )

export default Layout;