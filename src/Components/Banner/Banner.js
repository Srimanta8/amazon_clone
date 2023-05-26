import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    

<div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t z-05 from-slate-200 to-transparent bottom-0 z-50" />
      <Carousel
        autoplay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
         <div>
        <img
          loading="lazy"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/pricepointstore/clothing/199/under-199-desktop-header.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          loading="lazy"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2022/May_Art_StealDeals/Top_banner/Header-1242x450.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          loading="lazy"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/pricepointstore/Revised/299-pc-without-stripe.jpg"
          alt=""
        />
      </div>
      </Carousel>
    </div>


  )
}

export default Banner
