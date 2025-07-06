import { BreadCrumbComponent } from '@/components/BreadCrumbComponent'
import Filters from '@/components/Filters'
import React from 'react'

const RecipesPage = () => {
  return (
    <main className="mt-[72px]">
        <div className="container main-container">
            <div className='py-5 lg:py-8'>
                <BreadCrumbComponent page='recipes' child='' />
            </div>
            <div className='my-5 lg:mb-8 '>
            <Filters />
            </div>
        </div>
    </main>
  )
}

export default RecipesPage