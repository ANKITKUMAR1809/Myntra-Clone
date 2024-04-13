import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
const Layout = () => {
  return (
    <>
    <div className='navbar'>
    <Navbar/>
    </div>
    <Outlet />
    </>
  )
}

export default Layout;