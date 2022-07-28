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
    <div className='h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed bg:scroll@lg'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg.png'})`}}
    >
      <div className=' flex flex:col'>
        <div className='w:80% center mb:20 pt:35% w:1/2@lg pt:5%@lg o:last@lg ' 
          data-aos="fade" data-aos-duration="1500" >
            <Slider {...settings} >
              {
                data.map((item,index)=>{
                  return(
                    <div key={index} className='rel w:full '>
                        <img src={process.env.PUBLIC_URL +'/images/section3/'+item} alt="" className='w:full'/>
                    </div>
                  )
                })
              }
            </Slider>
        </div>
        <div className='o:first@lg'>
          <div className='flex flex:col jc:center w:80% mx:auto pt:5% rel z:1 w:1/2@lg '>
            <div className='w:full center mb:20 w:1/2@lg mb:10@lg' 
              data-aos="fade" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section3/title.png'} alt="" className='w:full'/> 
            </div>
          </div>
          <div className='flex flex:col jc:center w:60% mx:auto pt:5% rel z:1 f:white w:1/2@lg pt:1%@lg '>
            <div className='by:2 py:20 f:14 lh:1.4 t:justify' data-aos="fade" data-aos-duration="1500">
              高鐵第一排、機捷A18站、大竹交流道，輕鬆穿梭國際門戶，從容佈局全世界，便捷交通，讓您盡享贏家快意人生

            </div>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Section3