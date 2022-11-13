import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNav from './AdminNav'

const Admin = () => {
  return (
    <>
    {/* Navbar admin page */}
        <AdminNav/>
        <Outlet/>


    </>
  )
}

export default Admin