import React, { useState } from 'react'
import { GrInstagram } from "react-icons/gr";
import { PiFacebookLogoBold } from "react-icons/pi";
import { SiWhatsapp } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";

import { SiAirtable } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";







const Home = () => {
  
  
  
  
  
  
  return (

    <>

      {/* hero section */}

      <section className='relative top-0 left-0  md:h-[30rem] h-[35rem] bg-white  flex-col md:flex-row w-full text-black flex justify-center items-center py-[3rem]'>


        <div className='w-[90%]  md:w-[60%] text-center capitalize flex justify-center items-center flex-col gap-[2rem]'>
          <h1 className='md:text-[48px] text-[28px] font-bold leading-[1.5] md:leading-[1.1] text-green-800' ><span className='text-black md:text-[48px] text-[28px]' style={{ fontFamily: 'Orbitron, sans-serif' }}>empower your future with renewable </span> energy solutions </h1>
          <p className='md:text-[18px] font-[400] leading-[1.75] text-[16px] text-black' style={{ fontFamily: 'Nunito, sans-serif' }}>suryachat energy , we specilize in providing innovative solar and renewable energy solution tailored to you . join us in creating a sustainable future for generation to come!</p>


<div className='flex justify-center items-center gap-5 w-[90%]'>


          <button className='md:w-[10rem] w-[8rem]  h-[3rem]  border-[1px] text-[16px] md:text-[16px]  font-normal  border-gray-500 bg-black text-white ' >Get a quote <IoArrowForward className='inline-block' />
          </button>

          <button className='md:w-[10rem] w-[8rem] h-[3rem] border-gray-950 bg-transparent border-[1px] text-[16px] md:text-[16px]  font-normal ' >learn more <IoArrowForward className='inline-block' />
          </button>

          </div>

         

        </div>

        <div className=' flex justify-start items-start gap-6 md:flex-col flex-row  text-black  text-[25px] rounded  md:relative md:left-[11rem] relative left-0 top-10 md:top-0' >

          <div >
            <GrInstagram className="" />

          </div>

          <div >
            <PiFacebookLogoBold />

          </div>

          <div>
            <SiWhatsapp />

          </div>



        </div>

      

      </section >

{/* hero bottom img */}

<div className='w-[90%] md:h-auto m-auto rounded-md py-[2rem] md:py-auto h-[20rem]  '>
          <img src="https://homescape.solar/wp-content/uploads/2022/10/Top-7-Benefits-of-Solar-Energy.jpg" alt="" className='w-full h-full rounded-md'/>
        </div>







      {/* services section */}


      <section className='bg-white h-auto  w-auto  flex justify-center items-center py-[4rem] pt-[1rem]'>

        <div className='w-[90%] h-auto  gap-[3rem] flex justify-center  items-center flex-col'>

          <div className=' md:flex justify-between items-center  h-auto flex-col md:flex-row w-full text-black md:gap-[3rem]  gap-[5rem] capitalize'>

            <div className='md:w-[30%] h-auto  w-full '>

              <p className='text-[24px] text-green-900'>services</p>
              <h4 className='md:text-[32px] text-[28px] font-bold leading-[1.4] md:leading-[1.4] pt-[2rem]' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>our comprehensive renewable energy solutions <span className='text-green-900'>discover us ?</span> </h4>
            </div>

            <div className='md:w-[50%] h-auto w-full pt-[2rem] md:py-[0rem]'>
              <p className='md:text-[16px] font-normal leading-[1.75] ' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias nostrum at cumque illo vero natus mollitia sit saepe, explicabo hic ab voluptates ipsam dolorum, ad tempore sed suscipit. Quisquam.</p>
            </div>

          </div>


          <div className=' flex justify-between items-center w-full h-auto flex-col md:flex-row gap-[2rem]'>

          <div className='md:w-[22rem] md:h-[16rem] h-auto   text-black flex justify-start items-start flex-col   capitalize rounded'>

          <SiAirtable className='text-[2rem]'/>
          <h4 className='font-bold pt-3 text-black text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>expert solar pannel installation services</h4>
<p className='text-[13px] pt-2 leading-[1.75] font-normal text-black' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint placeat, vel ea nemo dolores, modi inventore quis odit, tenetur molestias asperiores optio! Cumque dolorem sapiente expedita dolores vel optio! Earum.
</p>

</div>

<div className='md:w-[22rem] md:h-[16rem] h-auto  text-black flex justify-start items-start flex-col   capitalize rounded'>

<SiAirtable className='text-[2rem]'/>
<h4 className='font-bold pt-3 text-black text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>personalized consultaion for your energy needs</h4>
<p className='text-[13px] pt-2 leading-[1.75] font-normal text-black' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint placeat, vel ea nemo dolores, modi inventore quis odit, tenetur molestias asperiores optio! Cumque dolorem sapiente expedita dolores vel optio! Earum.
</p>

</div>

<div className='md:w-[22rem] md:h-[16rem] h-auto  text-black flex justify-start items-start flex-col  capitalize rounded'>

<SiAirtable className='text-[2rem]'/>
<h4 className='font-bold pt-3 text-black text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>why choose us for renewable energy solutions</h4>
<p className='text-[13px] pt-2 leading-[1.75] font-normal text-black' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint placeat, vel ea nemo dolores, modi inventore quis odit, tenetur molestias asperiores optio! Cumque dolorem sapiente expedita dolores vel optio! Earum.
</p>

</div>

          </div>

          <div className='md:w-full w-full h-auto    flex justify-start items-start  gap-[1rem] capitalize '>



            <button className=' border-gray-400 border-[1px] w-[10rem] h-[3rem]  text-[16px] capitalize'>learn more</button>

            <button className='   w-[10rem] h-[3rem] text-[16px] capitalize'>get a quate </button>

          </div>

        </div>


      </section>

     


{/* project section */}

<section className='w-[90%] h-auto bg-red flex justify-center items-center gap-[2rem]  flex-col m-auto py-[3rem] pt-[1rem]' >

  <div className='flex justify-center items-center flex-col gap-[4rem]'>

    <div className='capitalize md:w-[50%] w-full flex justify-center items-center flex-col'>
      <p className='text-[22px] font-normal text-green-900'> portfolio </p>
      <h5 className='font-bold text-[28px] md:text-[32px] text-green-900' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>our recent projects </h5>
      <p className='text-[16px] font-normal'>explore the empact our energy solution</p>
    </div>


    <div className='rounded'>

      <img src="https://www.twi-global.com/image-library/hero/solar-panels-istock-1049388950.jpg" alt=""  className='w-full object-cover rounded'/>
    </div>

  </div>

  <div className=' flex justify-between items-center w-full h-auto capitalize flex-col md:flex-row gap-[2rem]'>

    <div className='md:w-[50%] w-full flex justify-start items-start flex-col gap-[0.5rem]'>
      <p className='text-[22px] font-bold' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>solar farm expansion</p>
      <p className='text-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, quam praesentium.</p>

    </div>
 
    <div className='md:w-[50%] w-full md:text-end text-[16px] text-start' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>
      view project 
    </div>

  </div>

  <div className='rounded'>

<img src="https://www.twi-global.com/image-library/hero/solar-panels-istock-1049388950.jpg" alt=""  className='w-full object-cover rounded'/>
</div>

<div className=' flex justify-between items-center w-full h-auto capitalize flex-col md:flex-row gap-[2rem]'>

    <div className='md:w-[50%] w-full flex justify-start items-start flex-col gap-[0.5rem]'>
      <p className='text-[22px] font-bold' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>wind energy initative</p>
      <p className='text-[16px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, quam praesentium.</p>

    </div>
 
    <div className='md:w-[50%] w-full md:text-end text-[16px] text-start' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>
      view project 
    </div>

  

  </div>

  <div className='flex justify-center border border-gray-900 w-[10rem] h-[3rem] items-center capitalize'>
      <NavLink>view all</NavLink>
    </div>
  

</section>


{/*contact us section  */}

<section className='flex justify-center items-center w-full h-auto py-[3rem]'>

  <div className='flex justify-start flex-col w-[90%] h-auto gap-[3rem]'>
    <div className='capitalize'>
      <p className='text-[20px] font-normal'>contact us</p>
      <p className='text-[28px] md:text-[32px] font-bold' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>get in touch </p>
      <p className='font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>

    <div className='flex justify-between items-center flex-col md:flex-row'>

      <div className='flex justify-start items-start flex-col gap-[2rem] md:w-[50%] w-full'>

      <div className='capitalize flex justify-start items-start gap-[0.5rem] flex-col'>
<MdOutlineMail className='text-[16px] font-bold'/>

  <p className='text-[16px] font-bold'>email</p>
  <p>contact us anytime</p>
  <a href="email:info@suryachhatenergy.com">info@suryachhatenergy.com</a>

</div>

<div className='capitalize flex justify-start items-start gap-[0.5rem] flex-col'>
<FaPhoneAlt className='text-[16px] font-bold'/>

  <p className='text-[16px] font-bold'>phone</p>
  <p>contact us for support</p>
  <a href="call:info@suryachhatenergy.com">+91-1234567890</a>

</div>



<div className='capitalize flex justify-start items-start gap-[0.5rem] flex-col'>
<FaLocationDot className='text-[16px] font-bold'/>

  <p className='text-[16px] font-bold'>office</p>
  <p>456 renewable way, eco city. ca 90210</p>

</div>

<div className='capitalize'>
<p>get direction </p>

</div>


<div>

</div>

<div>

</div>

      </div>

      <div className='md:w-[50%] w-full h-full'>
<img src="https://www.maptive.com/wp-content/uploads/2022/09/customer-location-map-1024x575.png" alt="" className='h-full'/>
      </div>


    </div>
  </div>

</section>

    </>




  )
}

export default Home
