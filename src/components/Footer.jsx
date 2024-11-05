import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";







const Footer = () => {
  return (
    <>

<footer className='bg-white h-auto   flex justify-center items-center py-[3rem]   border'>

  <div className='flex justify-between flex-col md:flex-row  w-[90%] h-auto gap-[2rem] capitalize '>

    <div className='md:w-[30%] h-auto w-full text-black'>

    <h1 className='font-bold md:text-[32px] text-[28px]'>logo</h1>

<p className='pt-[1rem] text-black'style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae et error ab ducimus eaque nesciunt totam nulla, !</p>


<ul className='list-none text-black flex justify-start items-center gap-[1rem] mt-[1rem]'>


<span className='font-normal '>follow us</span>

<li className='text-[2rem]'>
<NavLink>
<FaFacebook />

</NavLink>
</li>

<li className='text-[2rem]'>

<NavLink>
<PiInstagramLogoBold />

</NavLink>

</li>


<li className='text-[2rem]'>

  <NavLink>
  <FaWhatsapp />

  </NavLink>

  </li>



</ul>

    </div>

    <div className=' md:w-[30%] w-full h-auto flex justify-between   gap-[2rem]'>

   

    <div className='w-[50%]  h-auto flex justify-start items-start  md:items-start flex-col  md:flex-row '>
      <ul style={{ fontFamily: 'Nunito, sans-serif' }} className='text-black'>

        <li className='text-[20px]' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>quick link</li>
        <li className='pt-[1rem]'>home</li>
        <li className='pt-[0.5rem]' >about</li>

        <li className='pt-[0.5rem]' >services</li>
        <li className='pt-[0.5rem]'>recent projects</li>

        <li className='pt-[0.5rem]'>get a quote</li>
        <li className='pt-[0.5rem]'>contact</li>
      </ul>

      </div>

    <div className='w-[50%] h-auto flex justify-start md:items-start items-start flex-col md:flex-row '>
    <ul style={{ fontFamily: 'Nunito, sans-serif' }} className='text-black'>

<li className='text-[20px]' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>resources</li>
<li className='pt-[1rem]'>blog</li>
<li className='pt-[0.5rem]'>faqs</li>
<li className='pt-[0.5rem]'>case studies</li>
<li className='pt-[0.5rem]'>sustainabily</li>
<li className='pt-[0.5rem]'>partnerships</li>

</ul>

    </div>

    <div className='w-[50%] h-auto flex justify-start md:items-start items-start flex-col md:flex-row '>
    <ul style={{ fontFamily: 'Nunito, sans-serif' }} className='text-black'>

<li className='text-[20px]' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>stay connected</li>
<li className='pt-[1rem]'>follow us</li>
<li className='pt-[0.5rem]'>join us</li>
<li className='pt-[0.5rem]'>news letter</li>
<li className='pt-[0.5rem]'>feedback</li>
<li className='pt-[0.5rem]'>support</li>

</ul>

    </div>

    </div>




    <div className='w-auto h-auto flex justify-start md:items-start flex-col  md:flex-row '>
    <ul style={{ fontFamily: 'Nunito, sans-serif' }} className='text-black'>



<li>

  <p className='text-[20px] ' style={{ fontFamily: "Nanum Myeongjo, serif"}}>subscribe our news letter
  </p>
</li>

<li>
<input type="text" placeholder='Enter the email ' className='px-[1rem] h-[3rem]  mt-[1rem] border border-green-900'/>
<button className='w-[5rem] h-[3rem] border border-green-900 bg-black text-white capitalize'>join now</button>
</li>




</ul>
    </div>


  </div>

</footer>



<section className='flex  bg-green-900 justify-center w-full h-auto items-center    py-[1rem] capitalize'>
  <div className='w-[90%] h-auto text-white'> <p style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>copyright 2024 @ suryachhat : designed</p></div>
</section>



    </>
  )
}

export default Footer
