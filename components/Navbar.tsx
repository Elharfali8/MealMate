import { links } from '@/utils/links'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

type SidebarProps = {
    sidebarIsOpen: boolean;
    toggleSidebar: () => void;
}


const Navbar = ({sidebarIsOpen, toggleSidebar}: SidebarProps) => {
  return (
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between py-4 z-[99]">
              <Link href={'/'} className='text-2xl font-bold text-[#4CAF50]'>
              𝓜𝓮𝓪𝓵𝓜𝓪𝓽𝓮
              </Link>
              <ul className='hidden lg:flex items-center gap-4'>
                  {links.map((link) => {
                      const { id, title, url } = link
                      return (
                          <li key={id}>   
                              <Link href={url} className='text-lg font-semibold hover:text-[#4CAF50] transition-colors duration-300'>
                                  {title}
                              </Link>
                          </li>
                      )
                  })}
              </ul>
          <div className='hidden lg:flex items-center gap-4'>
                  <Button className='bg-[#4CAF50] text-white hover:bg-[#388E3C] transition-colors duration-300' asChild>
                      <Link href={'/login'} >
                          Login
                      </Link>
                  </Button>
                  <Button variant={'outline'} className='border-[#4CAF50] hover:bg-[#4CAF50] hover:text-white' asChild>
                      <Link href={'/register'}>
                          Register
                      </Link>
              </Button>
          </div>
              <div className='lg:hidden grid place-items-center'>
              <Button className='bg-[#4CAF50] text-white hover:bg-[#388E3C] transition-colors duration-300' size={'icon'} onClick={toggleSidebar}>
                  {sidebarIsOpen ? (
                      <X className='w-6 h-6' />
                  ): (
                      <Menu className='w-6 h-6' />
                          
                  )}
                      </Button>
              </div>
          
    </nav>
  )
}

export default Navbar