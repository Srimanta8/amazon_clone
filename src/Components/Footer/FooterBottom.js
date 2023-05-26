import React from 'react'
import {FooterBottomItems} from '../../Constants/FooterBottomItems'

function FooterBottom() {
  return (
    <div className='w-full bg-footerbottom px-8'>    
    <div className='max-w-5xl mx-auto'>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 place-content-center text-lightgray pt-6 pb-5 '>
      {
      FooterBottomItems.map((item)=>(
        <div className='group cursor-pointer' key={item._id}>
          <h3 className='footerbottomtitle loading-3'>{item.title}</h3>
          <p className='footerbottomp loading-3'>{item.des}</p>
        </div>
      ))
    }

      </div>

    </div>
    </div>
  )
}

export default FooterBottom