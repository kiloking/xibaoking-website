import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from './Helper/helper'
function Section2() {
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
    <div className='min-h-screen bg-[#18517e] relative'>
      <div
        className='inset-0 absolute  bg-top bg-no-repeat bg-[length:100%_100%] md:bg-cover  lg:bg-scroll z-0  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/section2_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/section2_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex-col justify-center w-[60%] mx-auto pt-[30%] relative z-10 text-white lg:pt-[10%] lg:w-1/2 '>
        <div className='w-full mx-auto mb-10 lg:w-[30%] sm:w-[50%]' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section2/intro_title.png'} alt="" className='w-full'/> 
        </div>
        <div className='border-y-2 py-5 text-base leading-7 text-justify  sm:text-base' data-aos="fade" data-aos-duration="1500">
        大園國際高中、青園國小、青埔國小、五權國小、青埔國中、公七公園、兒二兒童遊樂園、華泰名品城、Ikea旗艦館、大江購物中心、青埔棒球場、國際經貿中心、Xpark八景島水族館、橫山書法藝術公園、青塘園美術館……. 等，享盡清新、便利結合之地，唯獨無二
        </div>

      </div>
      <div className='w-[80%] mx-auto pt-[10%] pb-[20%] lg:w-1/2 lg:pt-[3%] relative' 
        data-aos="fade" data-aos-duration="1500" >
          <Slider {...settings} >
            {
              data.map((item,index)=>{
                return(
                  <div key={index} className='rel w-full '>
                      <img src={process.env.PUBLIC_URL +'/images/section2/'+item} alt="" className='w-full'/>
                  </div>
                )
              })
            }
          </Slider>
      </div>
    </div>
  )
}

export default Section2