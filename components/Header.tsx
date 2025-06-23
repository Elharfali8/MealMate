'use client'
import { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Header = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarIsOpen(!sidebarIsOpen)
    }

  return (
      <header >
          <div className='px-4 lg:px-2 xl:px-0 fixed top-0 right-0 left-0 z-[99] shadow-md bg-white'>
            <Navbar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
          </div>
          <Sidebar sidebarIsOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
    </header>
  )
}

export default Header