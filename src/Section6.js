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
  const onSubmit = data => {
    console.log(data)
    axios.post('https://sheet.best/api/sheets/c045db18-f183-40d4-8e7f-ac7f53cb603f/tabs/web02', data)
    .then(response => {
      console.log(response);
      sendFormStatusModal()
    })
    .catch(err=>{
      console.log(err)
    })
  };
  return (
    <div className='min-h:100vh bg:#110807 rel'>
     
      
      {formStatus && <div className={'fixed w:full  z:40 inset:0 transition '} onClick={()=>setFormStatus(false)}>
        <div className={`w:3/5 mx:auto  r:10 p:10 bg:#000000b4 f:white f:12 top:15% rel transition duration:300 delay:1000   ${formStatus ? " opacity:1 blur(0) " : "opacity:0 blur(0.8) "}`}>
        表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎直接聯繫我們，謝謝！
        <div className=' abs top:-10 right:-10 p:5 bg:black r:10 cursor:pointer '><MdClear /></div>
        </div>
      
      </div>}
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover  bg:scroll@lg z:0  hidden@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section6/section6_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover bg:scroll@lg z:0  hidden block@lg'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section6/section6_bg_pc.jpg'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div className='flex flex:col jc:center w:80% mx:auto pt:25% rel z:1 w:1/2@lg pt:5%@lg'>
        <div className='w:full center mb:20 w:1/2@lg mb:10@lg w:60%@sm' data-aos="fade-up" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section6/title.png'} alt="" className='w:full'/> 
        </div>
      </div>
      <div className='flex gap:10 jc:center w:80% mx:auto mt:60 w:60%@sm rel' data-aos="fade-up" data-aos-duration="1500" >
        <a href="https://www.facebook.com/profile.php?id=100083270795919" target="_blank" rel="noreferrer" title="link-fb" className='link-fb'>
          <img src={process.env.PUBLIC_URL+'/images/section6/fb.png'} alt="" className='w:full'/> 
        </a>
        <a href="tel:033811288" target="_blank" rel="noreferrer" title="link-tel" className='link-tel'>
          <img src={process.env.PUBLIC_URL+'/images/section6/phone.png'} alt="" className='w:full' /> 
        </a>
        <a href="https://goo.gl/maps/H2V5dntwA5aYd31V8" target="_blank" rel="noreferrer" title="link-map" className='link-map'>
          <img src={process.env.PUBLIC_URL+'/images/section6/map.png'} alt="" className='w:full'/> 
        </a>
      </div>
      <div className='w:80% mx:auto mt:20 w:1/2@lg w:60%@sm rel' data-aos="fade-up" data-aos-duration="1500" >
        <div className='w:1/2@lg center'>
          <img src={process.env.PUBLIC_URL+'/images/section6/form_title.png'} alt="" className='w:full'/> 
        </div>
        <div className='w:full by:1 py:10 b:white mt:20 w:1/2@lg mx:auto'>
          <img src={process.env.PUBLIC_URL+'/images/section6/form_subtitle.png'} alt="" className='w:3/5 mx:auto'/> 
        </div>
        
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w:70% mx:auto my:20 w:40%@lg w:40%@sm rel" data-aos="fade-up" data-aos-duration="1500" >
        <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>姓名/</label>
          <input type="text" className="block  bg:white ml:3 r:5  w:full@sm
               px:6 py:8 " placeholder="姓名"    {...register("name", { required: true})}/>
        </div>
        <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>電話/</label>
          <input type="text" className="block  bg:white ml:3 r:5 w:full@sm   
               px:6 py:8 " placeholder="電話"    {...register("tel", { required: true})}/>
        </div>
        <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>居住地/</label>
          <input type="text" className="block  bg:white ml:3 r:5  w:full@sm
               px:6 py:8 " placeholder="居住地"    {...register("place", { required: true})}/>
        </div>
        <div className='w:full flex ai:center my:10 jc:end flex:col@sm ai:start@sm '>
          <label htmlFor="" className='f:#F8C785 f:bold mr:5'>預約訊息/</label>
          <input type="text" className="block  bg:white ml:3 r:5  w:full@sm
               px:6 py:8 " placeholder="預約訊息"    {...register("msg")}/>
        </div>
        <button className='bg:#F8C785 px:8 py:12 r:5 f:bold w:full t:14 f:#3A270D' type='submit'>送出表單</button>
      </form>

    </div>
  )
}

export default Section6