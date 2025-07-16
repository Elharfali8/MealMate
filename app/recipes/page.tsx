import { BreadCrumbComponent } from '@/components/BreadCrumbComponent'
import Filters from '@/components/Filters'
import RecipeCard from '@/components/RecipeCard'
import { recipesData } from '@/utils/recipes'
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
            <div className='mb-8 h-[2px] w-full bg-gray-500' />
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10 lg:mb-12'>
              {recipesData.map((recipe) => {
                return <RecipeCard key={recipe.id} {...recipe} />
              })}
            </div>
        </div>
    </main>
  )
}

export default RecipesPage