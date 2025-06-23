import React from 'react'

type TitleProps = {
    title: string,
    subTitle?: string
}

const SectionTitle = ({title, subTitle}: TitleProps) => {
  return (
      <div className='mb-5 lg:mb-8'>
          <h2 className=' capitalize text-2xl lg:text-3xl mb-1 font-bold'>{title}</h2>
          {subTitle && <p className='text-gray-600'>{subTitle}</p>}
    </div>
  )
}

export default SectionTitle