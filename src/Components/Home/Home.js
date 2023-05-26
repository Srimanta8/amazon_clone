import React from 'react'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

function Home() {
  return (
    <div className='bg-lightgray'>
    <Banner/>
    <div className='w-full mt-0 lg:mt-0 md:-mt-36 py-8 '>
    <Products/>
    </div>
    </div>
  )
}

export default Home