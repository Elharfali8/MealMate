'use client'
import MainSearchInput from './MainSearchInput'
import { menuItems } from '@/utils/menu'
import { Button } from './ui/button'
import { useState } from 'react'

const Filters = () => {
  const [activeMenu, setActiveMenu] = useState<string>('Burger')

  const handleMenuActive = (cate:string) => {
    setActiveMenu(cate)
  }

  return (
    <div className='w-full px-4 py-8 rounded-lg shadow-lg bg-gray-100 z-[99]'>
        <div>
          <MainSearchInput />
        </div>
        <div className='flex items-center flex-wrap gap-3 mt-4'>
        {menuItems.map((item) => {
          const {id, name, path} = item
          return (
            <Button variant={`${activeMenu === name ? 'default' : 'outline'}`} onClick={() => handleMenuActive(name)}>
              {name}
            </Button>
          )
        })}
        </div>
    </div>
  )
}

export default Filters