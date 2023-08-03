import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

function Main() {
  const store = localStorage.getItem("token")
  return (

    <div className='flex'>

      <Sidebar />
      <main className='flex flex-col flex-1'>
        <Navbar />
        <Outlet />
      </main>
    </div>

  )
}

export default Main
