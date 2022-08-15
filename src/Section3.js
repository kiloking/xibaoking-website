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
    <div className='min-h:100vh bg:#2da7da rel'>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover  bg:scroll@lg z:0  hidden@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover bg:scroll@lg z:0  hidden block@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className=' flex flex:col rel'>
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
            <div className='w:full center mb:20 w:1/2@lg mb:10@lg w:60%@sm' 
              data-aos="fade" data-aos-duration="1500" >
              <img src={process.env.PUBLIC_URL+'/images/section3/title.png'} alt="" className='w:full'/> 
            </div>
          </div>
          <div className='flex flex:col jc:center w:60% mx:auto pt:5% rel z:1 f:white w:1/2@lg pt:1%@lg pb:5%@sm pb:0@lg '>
            <div className='by:2 py:20 f:16 lh:1.4 t:justify f:1.5rem@sm' data-aos="fade" data-aos-duration="1500">
              高鐵第一排、機捷A18站、大竹交流道，輕鬆穿梭國際門戶，從容佈局全世界，便捷交通，讓您盡享贏家快意人生

            </div>
          </div>
        </div>
      </div>

      

    </div>
  )
}

export default Section3