import React from 'react'

function Section7() {
  return (
    <div className='min-h-screen bg-[#F1F1F1] relative'>
			<div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  lg:bg-scroll z-0  lg:hidden'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section7/section7_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section7/section7_bg_pc.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
			<div className='flex flex-col justify-center w-[85%] mx-auto pt-[20%] rel z-10 lg:w-1/2 lg:pt-[5%] lg:hidden'>
        <div className='w-[65%] mx-auto mb-5 lg:w-1/2 lg:mb-10 sm:w-[60%]' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_title.png'} alt="" className='w-full'/> 
        </div>
				<div className='w-[45%] mx-auto mb-5 lg:w-1/2 lg:mb-10 sm:w-[60%]' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_subtitle.png'} alt="" className='w-full'/> 
        </div>
				<div className='w-[60%] mx-auto mt-5 mb-10 lg:w-1/2 lg:mb-10 sm:w-[60%]' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section7/section7_text.png'} alt="" className='w-full'/> 
        </div>
      </div>
			<div className='flex relative z-10 w-[85%] mx-auto  justify-between gap-8 lg:hidden' data-aos="fade-up" data-aos-duration="1500">
				<img src={process.env.PUBLIC_URL+'/images/section7/section7_content.png'} alt="" className='w-[45%]'/>
				<div className='w-[50%] flex flex-col  justify-between mt-10'>
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_p01_mb.png'} alt="" className='w-full'/>
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_p02_mb.png'} alt="" className='w-full'/>
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_p03_mb.png'} alt="" className='w-full'/>
				</div>
			</div>
			<div className='lg:flex z-10 hidden gap-10 w-full relative bottom-0   justify-end pt-[15%]'>
				<div className='flex flex-col  justify-start  w-[45%]' data-aos="fade" data-aos-duration="1500">
					<div className='w-[60%]  mb-5 lg:w-1/2 lg:mb-2 lg:w-[60%]' 
						data-aos="fade" data-aos-duration="1500" >
							<img src={process.env.PUBLIC_URL+'/images/section7/section7_title_pc.png'} alt="" className='w-full'/> 
					</div>
					<div className='w-[30%]  mb-10 mt-5  lg:mb-5 lg:w-[30%]' 
						data-aos="fade" data-aos-duration="1500" >
							<img src={process.env.PUBLIC_URL+'/images/section7/section7_subtitle_pc.png'} alt="" className='w-full'/> 
					</div>
					<div className='w-[20%]  mb-10 mt-5  lg:mb-5 lg:w-[45%]' 
						data-aos="fade" data-aos-duration="1500" >
							<img src={process.env.PUBLIC_URL+'/images/section7/section7_text_pc.png'} alt="" className='w-full'/> 
					</div>
					<div className='w-full mt-15 grid grid-cols-3 gap-5'>
						<img src={process.env.PUBLIC_URL+'/images/section7/section7_p01_pc.png'} alt="" className='w-full'/>
						<img src={process.env.PUBLIC_URL+'/images/section7/section7_p02_pc.png'} alt="" className='w-full'/>
						<img src={process.env.PUBLIC_URL+'/images/section7/section7_p03_pc.png'} alt="" className='w-full'/>
					</div>
				</div>
				<div className='w-[20%]  flex items-end mr-[8%]' data-aos="fade-left" data-aos-duration="1500">
					<img src={process.env.PUBLIC_URL+'/images/section7/section7_content_pc.png'} alt="" className='w-full'/>
				</div>
			</div>
    </div>
  )
}

export default Section7