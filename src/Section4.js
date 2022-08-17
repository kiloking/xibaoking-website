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
    <div className='min-h:100vh bg:#070302 rel'>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover  bg:scroll@md z:0  hidden@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover bg:scroll@md z:0  hidden block@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex:col jc:center w:80% mx:auto pt:20% rel z:1  pt:5%@sm'>
        <div className='w:full center mb:15 w:30%@md w:80%@sm' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section4/logo.png'} alt="" className='w:full'/> 
        </div>   
        <div className='flex flex:col flex:row@md ai:center@md jc:center@md  '>
          <div className='w:full center mb:15 w:1/2@md pt:5%@md w:80%@sm pt:5%@sm' 
            data-aos="fade" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section4/block.png'} alt="" className='w:full w:1/2@md mx:auto@md'/> 
          </div>
          <div className='w:full center mb:10 pt:5% w:1/2@md pb:80@sm' 
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