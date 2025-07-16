'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { store } from '@/store'
import React from 'react'
import { Provider } from 'react-redux'


const Providers = ({children}: {children: React.ReactNode}) => {
  return (
      <Provider store={store} >
          <Header />
          {children}
          <Footer />
    </Provider>
  )
}

export default Providers