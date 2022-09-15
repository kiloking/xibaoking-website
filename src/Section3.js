import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from './Helper/helper'
function Section3() {
  const data = ['p01.jpg','p02.jpg','p03.jpg','p04.jpg','p05.jpg','p06.jpg']
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };
  return (
    <div className='min-h-screen bg-[#2da7da] relative'>
      <div
        className='inset-0 absolute  bg-top bg-no-repeat bg-[length:100%_100%] md:bg-cover  lg:bg-scroll z-0  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className=' flex flex-col relative'>
        <div className='w-[80%] mx-auto mb-10 pt-[35%] lg:w-1/2 lg:pt-[5%] lg:order-last ' 
          data-aos="fade" data-aos-duration="1500" >
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='rel w-full '>
                        <img src={process.env.PUBLIC_URL +'/images/section3/'+item} alt="" className='w-full'/>
                    </div>
                  )
                })
              }
            </Slider>
        </div>
        <div className='lg:order-first'>
          <div className='flex flex-col justify-center w-[80%] mx-auto pt-[5%] relative z-10 lg:w-1/2 '>
            <div className='w-full mx-auto mb-10 lg:w-1/2 lg:mb-10 sm:w-[60%]' 
              data-aos="fade" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section3/title.png'} alt="" className='w-full'/> 
            </div>
          </div>
          <div className='flex flex-col  justify-center w-[60%] mx-auto pt-[5%] relative z-10 text-white lg:w-1/2 lg:pt-[1%] sm:pb-[5%] lg:pb-0 '>
            <div className='border-y-2 py-5 text-base leading-7 text-justify  sm:text-base' data-aos="fade" data-aos-duration="1500">
              高鐵第一排、機捷A18站、大竹交流道，輕鬆穿梭國際門戶，從容佈局全世界，便捷交通，讓您盡享贏家快意人生

            </div>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Section3