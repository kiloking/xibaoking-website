import React from 'react'

function Section2() {
  return (
    <div className='h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section2/section2_bg.png'})`}}
    >
      <div className='flex flex:col jc:center w:60% mx:auto pt:30% rel z:1 f:white'>
        <div className='w:3/4 center mb:20' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section2/intro_title.png'} alt="" className='w:full'/> 
        </div>
        <div className='by:2 py:20 f:14 lh:1.5 t:justify' data-aos="fade" data-aos-duration="1500">
        大園國際高中、青園國小、青埔國小、五權國小、青埔國中、公七公園、兒二兒童遊樂園、華泰名品城、Ikea旗艦館、大江購物中心、青埔棒球場、國際經貿中心、Xpark八景島水族館、橫山書法藝術公園、青塘園美術館……. 等，享盡清新、便利結合之地，唯獨無二
        </div>

      </div>
      <div className='w:80% center mb:20 pt:10%' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/test.png'} alt="" className='w:full'/> 
      </div>
    </div>
  )
}

export default Section2