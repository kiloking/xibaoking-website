import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from './Helper/helper'
function Section1() {
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
    <div className='min-h-screen relative bg-[#261613]'
    
    >
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  lg:bg-scroll z-0  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1/section1_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-0 hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1/section1_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
    <div className='flex flex-col  justify-center w-[80%] mx-auto pt-[30%] relative z-10 lg:pt-[10%] lg:w-[20%] sm:w-[50%]'>
      <div className='w-3/4 mx-auto mb-10' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/section1/title.png'} alt="" className='w-full'/> 
      </div>
      <div className='w-full mx-auto mb-10 mt-12' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/section1/subtitle.png'} alt="" className='w-full'/> 
      </div>

    </div>
    <div className='w-full mx-auto mb-5  lg:w-1/2'>
    
          <Slider {...settings} >
            {
              data.map((item,index)=>{
                return(
                  <div key={index} className=' relative w-full '>
                      <img src={process.env.PUBLIC_URL +'/images/section1/'+item} alt="" className='w-full'/>
                  </div>
                )
              })
            }
          </Slider>
    </div>
    <div className='flex flex-col  justify-center w-[60%] mx-auto pt-[5%] relative z-10 text-white pb-[10%]  lg:w-1/2'>
      <div className='w-full mx-auto mb-10 sm:w-[50%] lg:w-[30%]' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/section1/intro_title.png'} alt="" className='w-full'/> 
      </div>
      <div className='border-y-2 py-5 text-base leading-7 text-justify  sm:text-base' data-aos="fade" data-aos-duration="1500">
        全球疫情的狀況下，「璽堡」別墅有天有地，遠離大樓群聚生活，更採間間套房
        <br />
        <br />
        革新住宅，時尚主流，崇尚天然健康低密度環境

      </div>
    </div>
    
    </div>

  )
}

export default Section1