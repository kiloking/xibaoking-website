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
    <div className='min-h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg.png'})`}}
    >
      <div className='flex flex:col jc:center w:80% mx:auto pt:20% rel z:1  pt:5%@lg'>
        <div className='w:full center mb:15 w:30%@lg' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section4/logo.png'} alt="" className='w:full'/> 
        </div>   
        <div className='flex flex:col flex:row@lg ai:center@lg jc:center@lg '>
          <div className='w:full center mb:15 w:1/2@lg pt:5%@lg ' 
            data-aos="fade" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section4/block.png'} alt="" className='w:full w:1/2@lg mx:auto@lg'/> 
          </div>
          <div className='w:full center mb:10 pt:5% w:1/2@lg' 
            data-aos="fade" data-aos-duration="1500" >
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='rel w:full '>
                        <img src={process.env.PUBLIC_URL +'/images/section4/'+item} alt="" className='w:full'/>
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