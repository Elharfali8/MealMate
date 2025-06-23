'use client'
import SectionTitle from './SectionTitle'
import MainCarousel from './MainCarousel'
import { menuItems, MenuProps } from '@/utils/menu'
import { useEffect, useState } from 'react'
import { LoaderIcon } from 'lucide-react'

type Data = {
    data: MenuProps[]
}

const MenuSection = () => {
  const [menu, setMenuItems] = useState<Data>({ data: [] })

  useEffect(() => {
  setMenuItems({ data: menuItems })
}, [])

  return (
      <section className='py-8 lg:my-10'>
          <div className='max-w-[1400px] mx-auto px-4 lg:px-2 xl:px-0'>
              <SectionTitle title='explore our menu' subTitle='Discover a variety of  delicious meals tailored to every taste and lifestyle.' />
              <div className='w-[80%] lg:w-[90%] mx-auto mb-8 lg:mb-10'>
                {menu.data.length > 0 ? (
                  <MainCarousel data={menu.data} />
                ) : (
              <div className='grid place-items-center'>
                      <p className='text-lg lg:text-xl mb-2  font-bold'>Loading...</p>
                      <LoaderIcon className='animate-spin w-6 h-6'  />
                  </div>
                )}
              </div>
          </div>
    </section>
  )
}

export default MenuSection