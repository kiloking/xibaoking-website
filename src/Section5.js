import React from 'react'

function Section5() {
  return (
    <div className='h:100vh bg:beryl-14 bg:center bg:no-repeat bg:cover bg:fixed'
    style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section5/section5_bg.png'})`}}
    >
      <div className='flex flex:col jc:center w:80% mx:auto pt:20% rel z:1'>
        <div className='w:full center mb:20' 
          data-aos="fade" data-aos-duration="1500" >
            <img src={process.env.PUBLIC_URL+'/images/section5/title.png'} alt="" className='w:full'/> 
        </div>
      </div>
      <div className='w:11/12 mx:auto f:white t:center t:14' data-aos="fade" data-aos-duration="1500">
        <div className='w:1 h:35 bg:#C79F62 mx:auto mb:15'></div>
        <div className='mb:8'>
          <div className='f:#C79F62 f:bold'>櫻花SAVGO廚具</div>
          <div>簡約奢華歐式廚電，讓您專注烹飪的樂趣，體驗歐洲獨有風尚</div>
        </div>
        <div className='mb:8'>
          <div className='f:#C79F62 f:bold'>HCG單體馬桶</div>
          <div>兩段式省水標章，融合科技與美學的智慧結晶，賦予宅邸自在時尚</div>
        </div>
        <div className='mb:8'>
          <div className='f:#C79F62 f:bold'>優墅防盜氣密窗</div>
          <div>採雙氣密條、雙層玻璃，有效防水、隔音，阻遏外在干擾的屏障</div>
        </div>
        <div className='mb:8'>
          <div className='f:#C79F62 f:bold'>不斷電系統</div>
          <div>主電源故障時，提供緊急能量，可於家中大型電器進行穩定供給</div>
        </div>
        <div className='mb:8'>
          <div className='f:#C79F62 f:bold'>RC抗震結構</div>
          <div>鋼性材質，地震搖晃程度較低，防火、隔音效果佳，安全性能高</div>
        </div>

      </div>
      <div className='w:80% center mb:0 pt:20%' 
        data-aos="fade" data-aos-duration="1500" >
          <img src={process.env.PUBLIC_URL+'/images/test.png'} alt="" className='w:full'/> 
      </div>
    </div>
  )
}

export default Section5