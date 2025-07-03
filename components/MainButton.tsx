import React from 'react'
import { Button } from './ui/button'

const MainButton = ({text}:{text:string}) => {
  return (
    <Button variant='outline' className='border-[#388E3C] px-8 lg:px-10 text-[#388E3C] hover:bg-[#388E3C] hover:text-white capitalize text-lg '>
        {text}
    </Button>
  )
}

export default MainButton