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
    <div className='min-h:100vh rel bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed bg:scroll@lg'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1/section1_bg.png'})`}}
    >
    <div className='flex flex:col jc:center w:80% mx:auto pt:30% rel z:1 pt:10%@lg w:20%@lg'>
      <div className='w:3/4 center mb:20' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/section1/title.png'} alt="" className='w:full'/> 
      </div>
      <div className='w:full center mb:20 mt:50' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/section1/subtitle.png'} alt="" className='w:full'/> 
      </div>

    </div>
    <div className='w:full center mb:20  w:1/2@lg'>
    
          <Slider {...settings} >
            {
              data.map((item,index)=>{
                return(
                  <div key={index} className='rel w:full '>
                      <img src={process.env.PUBLIC_URL +'/images/section1/'+item} alt="" className='w:full'/>
                  </div>
                )
              })
            }
          </Slider>
    </div>
    <div className='flex flex:col jc:center w:60% mx:auto pt:10% rel z:1 f:white hidden@lg pb:10% '>
      <div className='w:full center mb:20 ' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/section1/intro_title.png'} alt="" className='w:full'/> 
      </div>
      <div className='by:2 py:20 f:16 lh:1.4 t:justify ' data-aos="fade" data-aos-duration="1500">
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