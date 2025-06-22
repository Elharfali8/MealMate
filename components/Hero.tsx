import React from 'react'
import heroImage from '@/public/assets/hero.jpg'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
      <div className='grid lg:place-items-center min-h-[calc(100vh-72px)]'
      
      >
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 items-center gap-6 max-w-7xl mx-auto px-4 ">
              
            <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Discover Recipes You'll Love 🍲
                </h1>
                <p className="text-muted-foreground text-lg">
                Find meals based on ingredients, plan your week, and eat smarter.
                </p>
                <div className="flex justify-between items-center">
                      <Input type='text' placeholder='Search a recipe...' className='rounded-r-none text-lg placeholder:text-lg' />
                      <Button asChild className='rounded-l-none'>
                          <Link href={`/recipes?search=`}>
                            Search
                          </Link>
                      </Button>
                </div>
            </div>

            
            <div className="w-full h-[400px]">
                <img
                src="/assets/hero.jpg"
                alt="Delicious Meal"
                className="w-full h-full object-cover rounded-xl shadow-lg"
                />
            </div>
            </div>

    </div>
  )
}

export default Hero