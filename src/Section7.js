import React from 'react'

function Section7() {
  return (
    <div className='min-h:100vh bg:#F1F1F1 rel'>
			<div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover  bg:scroll@md z:0  hidden@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section7/section7_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover bg:scroll@md z:0  hidden block@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section7/section7_bg_pc.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
			<div className='flex flex:col jc:center w:80% mx:auto pt:20% rel z:1 w:1/2@md pt:5%@md hidden@md'>
        <div className='w:65% center mb:20 w:1/2@md mb:10@md w:60%@sm' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_title.png'} alt="" className='w:full'/> 
        </div>
				<div className='w:45% center mb:20 w:1/2@md mb:10@md w:60%@sm' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_subtitle.png'} alt="" className='w:full'/> 
        </div>
				<div className='w:45% center mt:10 mb:20 w:1/2@md mb:10@md w:60%@sm' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_text.png'} alt="" className='w:full'/> 
        </div>
      </div>
			<div className='flex rel z:1 w:85% mx:auto jc:space-between gap:20 hidden@md' data-aos="fade-up" data-aos-duration="1500">
				<img src={process.env.PUBLIC_URL+'/images/section7/section7_content.png'} alt="" className='w:45%'/>
				<div className='w:50% flex flex:col jc:space-between mt:20'>
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_p01_mb.png'} alt="" className='w:full'/>
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_p02_mb.png'} alt="" className='w:full'/>
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_p03_mb.png'} alt="" className='w:full'/>
				</div>
			</div>
			<div className='flex@md z:1 hidden gap:50 w:full rel bottom:0  jc:flex-end pt:15%'>
				<div className='flex flex:col jc:flex-start  w:45%' data-aos="fade" data-aos-duration="1500">
					<div className='w:60%  mb:20 w:1/2@md mb:10@md w:60%@md' 
						data-aos="fade" data-aos-duration="1500" >
							<img src={process.env.PUBLIC_URL+'/images/section7/section7_title_pc.png'} alt="" className='w:full'/> 
					</div>
					<div className='w:30%  mb:20 mt:10  mb:10@md w:30%@md' 
						data-aos="fade" data-aos-duration="1500" >
							<img src={process.env.PUBLIC_URL+'/images/section7/section7_subtitle_pc.png'} alt="" className='w:full'/> 
					</div>
					<div className='w:20%  mb:20 mt:10  mb:10@md w:35%@md' 
						data-aos="fade" data-aos-duration="1500" >
							<img src={process.env.PUBLIC_URL+'/images/section7/section7_text_pc.png'} alt="" className='w:full'/> 
					</div>
					<div className='w:full mt:15 w:full@md grid grid-cols:3 gap:10'>
						<img src={process.env.PUBLIC_URL+'/images/section7/section7_p01_pc.png'} alt="" className='w:full'/>
						<img src={process.env.PUBLIC_URL+'/images/section7/section7_p02_pc.png'} alt="" className='w:full'/>
						<img src={process.env.PUBLIC_URL+'/images/section7/section7_p03_pc.png'} alt="" className='w:full'/>
					</div>
				</div>
				<div className='w:20%  flex ai:flex-end mr:8%' data-aos="fade-left" data-aos-duration="1500">
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_content_pc.png'} alt="" className='w:full'/>
				</div>
			</div>
    </div>
  )
}

export default Section7