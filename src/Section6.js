import React, { useState } from 'react'
import { useForm, reset } from "react-hook-form";
import axios from 'axios';
import { MdClear } from "react-icons/md";
function Section6() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      place: "",
    }
  });
  const [formStatus , setFormStatus] = useState(false)
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  //Main: https://sheet.best/api/sheets/b6059729-a36d-40c1-8fcb-8e8f75e4fdd7
  //TEST: https://sheet.best/api/sheets/c045db18-f183-40d4-8e7f-ac7f53cb603f
  //https://sheet.best/api/sheets/85ea31ab-db3e-4047-a5be-431b5feb08b8
  const onSubmit = data => {
    console.log(data)
    axios.post('https://sheet.best/api/sheets/85ea31ab-db3e-4047-a5be-431b5feb08b8', data)
    .then(response => {
      console.log(response);
      sendFormStatusModal()
    })
    .catch(err=>{
      console.log(err)
    })
  };
  return (
    <div className='min-h-screen bg-[#110807] relative'>
     
      
      {formStatus && <div className={'fixed w-full  z-40 inset-0 transition '} onClick={()=>setFormStatus(false)}>
        <div className={`w-3/5 mx-auto rounded-sm p-5 bg-[#000000b4] text-white text-sm top-[15%] relative transition duration-300 delay-1000   ${formStatus ? " opacity-1 blur(0) " : "opacity-0 blur(0.8) "}`}>
        表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎直接聯繫我們，謝謝！
        <div className=' absolute -top-5 -right-5 p-3 bg-black rounded-full cursor-pointer '><MdClear /></div>
        </div>
      
      </div>}
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover  lg:bg-scroll z-0  lg:hidden@'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section6/section6_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset-0 absolute  bg-center bg-no-repeat bg-cover lg:bg-scroll z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section6/section6_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex-col justify-center w-[80%] mx-auto pt-[25%] relative z-10 lg:w-1/2 lg:pt-[5%]'>
        <div className='w-full mx-auto mb-5 lg:w-1/2 lg:mb-10 sm:w-[60%]' data-aos="fade-up" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section6/title.png'} alt="" className='w-full'/> 
        </div>
      </div>
      <div className='flex gap-2  justify-center w-[80%] mx-auto mt-10 sm:w-[60%]  relative' data-aos="fade-up" data-aos-duration="1500" >
        <a href="https-//www.facebook.com/profile.php?id=100083270795919" target="_blank" rel="noreferrer" title="link-fb" className='link-fb'>
          <img src={process.env.PUBLIC_URL+'/images/section6/fb.png'} alt="" className='w-full'/> 
        </a>
        <a href="tel-033811288" target="_blank" rel="noreferrer" title="link-tel" className='link-tel'>
          <img src={process.env.PUBLIC_URL+'/images/section6/phone.png'} alt="" className='w-full' /> 
        </a>
        <a href="https-//goo.gl/maps/H2V5dntwA5aYd31V8" target="_blank" rel="noreferrer" title="link-map" className='link-map'>
          <img src={process.env.PUBLIC_URL+'/images/section6/map.png'} alt="" className='w-full'/> 
        </a>
      </div>
      <div className='w-[80%] mx-auto mt-10 lg:w-1/2 sm:w-[60%] relative' data-aos="fade-up" data-aos-duration="1500" >
        <div className='w-1/2@lg center'>
          <img src={process.env.PUBLIC_URL+'/images/section6/form_title.png'} alt="" className='w-full'/> 
        </div>
        <div className='w-full border-y-1 py-5 border-white mt-5 lg:w-1/2 mx-auto'>
          <img src={process.env.PUBLIC_URL+'/images/section6/form_subtitle.png'} alt="" className='w-4/5 mx-auto'/> 
        </div>
        
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto pb-20 lg:w-[40%] sm:w-[40%] relative" data-aos="fade-up" data-aos-duration="1500" >
        <div className='w-full flex items-center my-5   md:flex-col md:items-start justify-between '>
          <label htmlFor="" className='text-[#F8C785] font-bold '>姓名/</label>
          <input type="text" className="block  bg-white ml-3 lg:ml-0 rounded-sm  md:w-full
               px-3 py-4 " placeholder="姓名"    {...register("name", { required: true})}/>
        </div>
        <div className='w-full flex items-center my-5   md:flex-col md:items-start justify-between'>
          <label htmlFor="" className='text-[#F8C785] font-bold '>電話/</label>
          <input type="text" className="block  bg-white ml-3 lg:ml-0 rounded-sm  md:w-full   
               px-3 py-4 " placeholder="電話"    {...register("tel", { required: true})}/>
        </div>
        <div className='w-full flex items-center my-5   md:flex-col md:items-start justify-between'>
          <label htmlFor="" className='text-[#F8C785] font-bold '>居住地/</label>
          <input type="text" className="block  bg-white ml-3 lg:ml-0 rounded-sm  md:w-full
               px-3 py-4 " placeholder="居住地"    {...register("place", { required: true})}/>
        </div>
        <div className='w-full flex items-center my-5   md:flex-col md:items-start justify-between'>
          <label htmlFor="" className='text-[#F8C785] font-bold '>預約訊息/</label>
          <input type="text" className="block  bg-white ml-3 lg:ml-0 rounded-sm  md:w-full
               px-3 py-4 " placeholder="預約訊息"    {...register("msg")}/>
        </div>
        <button className='bg-[#F8C785] px-4 py-6 rounded-sm  font-bold w-full text-base text-[#3A270D]' type='submit'>送出表單</button>
      </form>

    </div>
  )
}

export default Section6