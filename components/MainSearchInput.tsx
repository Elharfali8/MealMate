import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const MainSearchInput = () => {
  return (
    <div className='flex items-center  '>
        <Input type='search' placeholder='Search for a meal, ingradient...' className='w-full md:rounded-r-none' />
        <Button className='bg-green-500 hover:bg-green-400 md:px-10 lg:px-16 md:rounded-l-none'>
            Search
        </Button>
    </div>
  )
}

export default MainSearchInput