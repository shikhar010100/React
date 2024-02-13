import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer.tsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout