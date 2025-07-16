import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Progress } from "@/components/ui/progress"

type Data = {
    id:number,
    image:string,
    title:string,
    vegetarian:boolean,
    vegan:boolean,
    healthScore:number,
    pricePerServing:number,
}

const RecipeCard = ({
    id,
    image,
    title,
    vegetarian,
    vegan,
    healthScore,
    pricePerServing,
} : Data
) => {
  return (
    <Link href={`/recipes/${id}`} className='mb-6 shadow-lg  rounded-lg overflow-hidden transition-all ease-in-out duration-150 hover:scale-105 hover:shadow-xl relative'>
        
        <Image 
            src={image}
            alt={title}
            width={300} height={300} className='w-full h-[200px] object-cover  shadow-md'
        />

        <div className='absolute top-1 right-1 text-sm'>
          <p className='px-2 py-1 rounded-lg bg-green-400 text-white '>
          {vegetarian && "vegetarian"}
        </p>

        <p className='px-2 py-1 rounded-lg bg-red-400 text-white mt-1 text-center'>
            {vegan === true && 'vegan'}
        </p>
        </div>
        
        <div className='p-2'>
          <h2 className=' font-medium text-lg'>{title}</h2>
          <p className='text-gray-500 capitalize'>
            price per serving : <span className='text-black'>${pricePerServing}</span>
          </p>
          <div className='mt-1'>
            <div className='flex items-center justify-between mb-1'>
              <p className='text-gray-600'>
              Health Score : 
            </p>
            <span>{healthScore}%</span>
            </div>
            <Progress value={healthScore} />
          </div>
        </div>
        
    </Link>
  )
}

export default RecipeCard