import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import '../styles/LayoutStyles.css'

const Layout = () => {
  return (
    <div className='layoutContainer'>
        <Header className='header'/>
        <SideBar className='sidebar'/>
        <div className='mainContent'/>
    </div>
  )
}

export default Layout
