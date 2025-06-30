import React from 'react'
import heroImage from '@/public/assets/hero.jpg'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import heroImg from '@/public/assets/hero-img.jpeg'

const Hero = () => {
  return (
      <div className='grid lg:place-items-center min-h-[calc(100vh-72px)] z-[10] p-4 lg:p-2 xl:p-0'
      >
          <div 
        style={{
          backgroundImage: `url(${heroImg.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
      }} 
        className="grid place-items-center py-8 items-center gap-6 max-w-[1400px] mx-auto px-4 h-[80%]  rounded-3xl">
              
            <div className=" text-center bg-gray-50/75 w-full max-w-5xl rounded-xl px-8 py-12 lg:py-16 shadow-lg backdrop-blur-md">
                <h1 className="text-4xl md:text-5xl font-bold  ">
                Discover Recipes You'll  Love 🍲
                </h1>
                <p className=" text-lg mt-1 text-gray-700 mb-5" >
                Find meals based on ingredients, plan your week, and eat smarter.
                </p>

          <Button className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 text-lg rounded-lg'>
            <Link href="/recipes" className="text-white">
              Explore Recipes
            </Link>
          </Button>
            </div>

            
            
            </div>

    </div>
  )
}

export default Hero