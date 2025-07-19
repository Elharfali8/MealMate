import React from 'react'
import SectionTitle from './SectionTitle'
import { fakeData } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'
import MainButton from './MainButton'

const RandomRecipes = () => {
  return (
    <section className='py-8 lg:my-10'>
          <div className='container max-w-[1100px] xl:max-w-[1200px]  2xl:max-w-[1400px] mx-auto px-4 lg:px-2 xl:px-0'>
              <SectionTitle title='random meals' subTitle='Explore chef-curated random dishes to diversify your meal plan with exciting new flavors.' />
              <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-8 lg:mb-10'>
                  {fakeData.map((recipe) => {
                      const { id, title, image } = recipe
                      return (
                          <Link href={`/recipes/${id}`} key={id} className='mb-6 shadow-lg pb-4 rounded-lg overflow-hidden transition-all ease-in-out duration-150 hover:scale-105 hover:shadow-xl bg-gray-100'>
                              <div className=''>
                                  <Image src={image} alt={title} width={300} height={300} className='w-full h-[200px] object-cover  shadow-md' />
                                  
                              </div>  
                              <div className='p-4'>
                                  <h3 className='text-lg font-semibold'>{title}</h3>
                              </div>
                          </Link>
                      )
                  })}
              </div>
              <div className='grid place-items-center mt-6 lg:mt-8'>
                    <MainButton text='load more' />
              </div>
              </div>
      </section>
  )
}

export default RandomRecipes