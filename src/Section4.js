import React from 'react'

function Section4() {
  return (
    <div className='h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section4/section4_bg.png'})`}}
    >
      <div className='flex flex:col jc:center w:80% mx:auto pt:20% rel z:1'>
        <div className='w:full center mb:15' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section4/logo.png'} alt="" className='w:full'/> 
        </div>
        <div className='w:full center mb:15 ' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section4/block.png'} alt="" className='w:full'/> 
        </div>
        <div className='w:full center mb:10 pt:5%' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/test.png'} alt="" className='w:full'/> 
      </div>
      </div>
    </div>
  )
}

export default Section4