import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from './Helper/helper'
function Section4() {
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
    <div className='min-h-screen bg-[#070302] relative'>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  lg:bg-scroll z-0  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[20%] relative z-10  sm:pt-[5%]'>
        <div className='w-full mx-auto mb-15 lg:w-[30%] sm:w-[80%]' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section4/logo.png'} alt="" className='w-full'/> 
        </div>   
        <div className='flex flex-col lg:flex-row lg:items-center  justify-center gap-16  '>
          <div className='w-full mx-auto mb-15 lg:w-1/2 lg:pt-[5%] sm:w-[80%] sm:pt-[5%]' 
            data-aos="fade" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section4/block.png'} alt="" className='w-full w-1/2@md mx-auto@md'/> 
          </div>
          <div className='w-full mx-auto mb-10 pt-[5%] lg:w-1/2 sm:pb-12' 
            data-aos="fade" data-aos-duration="1500" >
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='rel w-full '>
                        <img src={process.env.PUBLIC_URL +'/images/section4/'+item} alt="" className='w-full'/>
                    </div>
                  )
                })
              }
            </Slider>
          </div>
        </div>     
      </div>
    </div>
  )
}

export default Section4