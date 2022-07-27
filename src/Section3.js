import React from 'react'

function Section3() {
  return (
    <div className='h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section3/section3_bg.png'})`}}
    >
      <div className='w:80% center mb:20 pt:35%' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/test.png'} alt="" className='w:full'/> 
      </div>
      <div className='flex flex:col jc:center w:80% mx:auto pt:5% rel z:1'>
        <div className='w:full center mb:20' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section3/title.png'} alt="" className='w:full'/> 
        </div>
      </div>
      <div className='flex flex:col jc:center w:60% mx:auto pt:5% rel z:1 f:white'>
        <div className='by:2 py:20 f:14 lh:1.4 t:justify' data-aos="fade" data-aos-duration="1500">
          高鐵第一排、機捷A18站、大竹交流道，輕鬆穿梭國際門戶，從容佈局全世界，便捷交通，讓您盡享贏家快意人生

        </div>
      </div>

    </div>
  )
}

export default Section3