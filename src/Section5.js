import React from 'react'
import Slider from "react-slick";
import {SamplePrevArrow, SampleNextArrow} from './Helper/helper'
function Section5() {
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
    <div className='min-h-screen bg-[#0e0c0a] relative'>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  lg:bg-scroll z-0  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section5/section5_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section5/section5_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[20%] relative z-10 lg:w-1/2 lg:pt-[5%]'>
        <div className='w-full mx-auto mb-10 lg:w-1/2 lg:mb-10 sm:w-[60%]' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section5/title.png'} alt="" className='w-full'/> 
        </div>
      </div>
      <div className='w-11/12 mx-auto text-white text-center text-sm  sm:text-base relative' data-aos="fade" data-aos-duration="1500">
        <div className='w-1 h-10 bg-[#C79F62] mx-auto mb-10'></div>
        <div className='flex flex-col lg:flex-row lg:gap-3'>
          <div className='mb-15 lg:mb-[3%] lg:b-1 lg:bg-[#C79F62] lg:py-5 lg:px-12  '>
            <div className='text-[#C79F62] lg:text-white font-bold text-lg mb-3  lg:mb-5 sm:text-lg '>櫻花SAVGO廚具</div>
            <div>簡約奢華歐式廚電，讓您專注烹飪的樂趣，體驗歐洲獨有風尚</div>
          </div>
          <div className='mb-15 lg:mb-[3%] lg:b-1 lg:bg-[#C79F62] lg:py-5 lg:px-10 '>
            <div className='text-[#C79F62] lg:text-white font-bold text-lg mb-3  lg:mb-5 sm:text-lg'>HCG單體馬桶</div>
            <div>兩段式省水標章，融合科技與美學的智慧結晶，賦予宅邸自在時尚</div>
          </div>
          <div className='mb-15 lg:mb-[3%] lg:b-1 lg:bg-[#C79F62] lg:py-5 lg:px-10 '>
            <div className='text-[#C79F62] lg:text-white font-bold text-lg mb-3  lg:mb-5 sm:text-lg'>優墅防盜氣密窗</div>
            <div>採雙氣密條、雙層玻璃，有效防水、隔音，阻遏外在干擾的屏障</div>
          </div>
          <div className='mb-15 lg:mb-[3%] lg:b-1 lg:bg-[#C79F62] lg:py-5 lg:px-10 '>
            <div className='text-[#C79F62] lg:text-white font-bold text-lg mb-3  lg:mb-5 sm:text-lg'>不斷電系統</div>
            <div>主電源故障時，提供緊急能量，可於家中大型電器進行穩定供給</div>
          </div>
          <div className='mb-15 lg:mb-[3%] lg:b-1 lg:bg-[#C79F62] lg:py-5 lg:px-10 '>
            <div className='text-[#C79F62] lg:text-white font-bold text-lg mb-3  lg:mb-5 sm:text-lg'>RC抗震結構</div>
            <div>鋼性材質，地震搖晃程度較低，防火、隔音效果佳，安全性能高</div>
          </div>
        </div>


      </div>
      <div className='w-[80%] mx-auto mb-0 pt-[15%] pb-[20%] lg:w-1/2 lg:pt-[3%]  relative' 
        data-aos="fade" data-aos-duration="1500" >
          <Slider {...settings} >
            {
              data.map((item,index)=>{
                return(
                  <div key={index} className='rel w-full '>
                      <img src={process.env.PUBLIC_URL +'/images/section5/'+item} alt="" className='w-full'/>
                  </div>
                )
              })
            }
          </Slider>
      </div>
    </div>
  )
}

export default Section5