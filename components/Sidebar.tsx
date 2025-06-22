import React from 'react'

type SidebarProps = {
    sidebarIsOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar = ({sidebarIsOpen, toggleSidebar}: SidebarProps) => {


  return (
    <aside  className={`
         p-6 z-[99] gradient-green 
      ${sidebarIsOpen ? 'lg:hidden fixed right-0 left-0 bottom-0 top-20 light-blue-bg-color translate-x-0 transition-all ease-in-out duration-150 ' : 'lg:hidden fixed right-0 left-0 bottom-0 top-20 light-blue-bg-color translate-x-[-100%] transition-all ease-in-out duration-150 '}
      `}>
          Sidebar
      </aside>
  )
}

export default Sidebar