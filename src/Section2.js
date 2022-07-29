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
    <div className='min-h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed bg:scroll@lg'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/section2_bg.png'})`}}
    >
      <div className='flex flex:col jc:center w:60% mx:auto pt:30% rel z:1 f:white pt:10%@lg w:1/2@lg '>
        <div className='w:full center mb:20 w:20%@lg' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section2/intro_title.png'} alt="" className='w:full'/> 
        </div>
        <div className='by:2 py:20 f:16 lh:1.5 t:justify ' data-aos="fade" data-aos-duration="1500">
        大園國際高中、青園國小、青埔國小、五權國小、青埔國中、公七公園、兒二兒童遊樂園、華泰名品城、Ikea旗艦館、大江購物中心、青埔棒球場、國際經貿中心、Xpark八景島水族館、橫山書法藝術公園、青塘園美術館……. 等，享盡清新、便利結合之地，唯獨無二
        </div>

      </div>
      <div className='w:80% center pt:10% pb:30% w:1/2@lg pt:3%@lg' 
        data-aos="fade" data-aos-duration="1500" >
          <Slider {...settings} >
            {
              data.map((item,index)=>{
                return(
                  <div key={index} className='rel w:full '>
                      <img src={process.env.PUBLIC_URL +'/images/section2/'+item} alt="" className='w:full'/>
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