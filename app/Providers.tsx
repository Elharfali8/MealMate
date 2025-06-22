import Header from '@/components/Header'
import React from 'react'

const Providers = ({children}: {children: React.ReactNode}) => {
  return (
      <>
          <Header />
          {children}
    </>
  )
}

export default Providers