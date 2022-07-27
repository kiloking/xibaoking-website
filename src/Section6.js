import React, { useState } from 'react'
import { useForm, reset } from "react-hook-form";
function Section6() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      place: "",
    }
  });
  const onSubmit = data => {
    console.log(data)

  };
  return (
    <div className='h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section6/section6_bg.png'})`}}
    >
      <div className='flex flex:col jc:center w:80% mx:auto pt:25% rel z:1'>
        <div className='w:full center mb:20' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section6/title.png'} alt="" className='w:full'/> 
        </div>
      </div>
      <div className='flex gap:10 jc:center w:80% mx:auto mt:60'>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section6/fb.png'} alt="" className='w:full'/> 
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section6/phone.png'} alt="" className='w:full'/> 
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section6/map.png'} alt="" className='w:full'/> 
        </div>
      </div>
      <div className='w:80% mx:auto mt:20'>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/section6/form_title.png'} alt="" className='w:full'/> 
        </div>
        <div className='w:full by:1 py:10 b:white mt:20'>
          <img src={process.env.PUBLIC_URL+'/images/section6/form_subtitle.png'} alt="" className='w:3/5 mx:auto'/> 
        </div>
        
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w:70% mx:auto my:20 ">
        <div className='w:full flex ai:center my:10 jc:end'>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>姓名/</label>
          <input type="text" className="block  bg:white r:5  
               px:5 py:3 " placeholder="姓名"    {...register("name", { required: true})}/>
        </div>
        <div className='w:full flex ai:center my:10 jc:end'>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>電話/</label>
          <input type="text" className="block  bg:white r:5  
               px:5 py:3 " placeholder="電話"    {...register("tel", { required: true})}/>
        </div>
        <div className='w:full flex ai:center my:10 jc:end'>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>居住地/</label>
          <input type="text" className="block  bg:white r:5  
               px:5 py:3 " placeholder="居住地"    {...register("place", { required: true})}/>
        </div>
        <div className='w:full flex ai:center my:10 jc:end'>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>預約訊息/</label>
          <input type="text" className="block  bg:white r:5  
               px:5 py:3 " placeholder="預約訊息"    {...register("msg")}/>
        </div>
        <button className='bg:#F8C785 px:8 py:6 r:5 f:bold w:full t:14 f:#3A270D' type='submit'>送出表單</button>
      </form>

    </div>
  )
}

export default Section6