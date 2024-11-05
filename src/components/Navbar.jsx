import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { SiRedhatopenshift } from 'react-icons/si';
import logo from '../assets/logo.jpg';
import { GrInstagram } from "react-icons/gr";
import { PiFacebookLogoBold } from "react-icons/pi";
import { SiWhatsapp } from "react-icons/si";





const Navbar = () => {


  const navbarList = [



    {
      name: 'home',
      link: '/',
    },

    {
      name:'about us',
      link:'/',
    },

    {
      name: 'services',
      link: '/',
    },


    {
      name: 'projects',
      link: '/',
    },


   


  ];






  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);

  };

  const closeMenu = () => {
    setOpen(false);
    
  };



  const [color, setColor] = useState(); // State to track the active link index

  const handleClick = (index) => {
    setColor(index); // Set the clicked link's index as active
closeMenu();

  };


 const [appointment2, setAppointment2] = useState(true);


 const bookAppointment = () => 
 {
  setAppointment2((prev) => !prev);


}


useEffect(() => {

setAppointment2(true);

} , [location.pathname]);


  return (

    <header className='bg-white flex justify-center items-center  h-[4rem] shadow-lg shadow-[black] border'>


      <div className='w-[90%] flex justify-between items-center text-black  capitalize'>



        <div className='w-full  md:w-auto flex justify-between items-center'>
          <h1 className='font-bold md:text-[32px] text-[28px]'>logo</h1>
          <HiMenuAlt3 onClick={openMenu} className='md:hidden text-[2rem]' />
        </div>

        <div className='flex items-center w-auto h-auto gap-9'>


       

        <nav className={` w-[100%]  h-screen md:overflow-auto overflow-y-auto   gap-[2rem] flex justify-center flex-col md:flex-row  items-center md:w-auto md:h-auto  md:bg-white bg-white z-20 md:z-0  md:relative  fixed  top-0 left-0 ${open ? 'block' : 'hidden'} md:block `}>





          <ul className={` w-[80%]    md:flex md:justify-between md:flex-row justify-start items-start  flex-col  h-auto md:items-center md:gap-[2rem] md:text-[14px] text-[18px] text-white md:text-black  md:w-auto md:h-auto `}>


        

            <li><HiMiniXMark onClick={closeMenu} className='md:hidden relative  text-[2rem] text-black' /></li>

            {navbarList.map((list, index) => (
        <li
          key={index}
          className={`md:text-black text-white md:text-[16px] text-[18px] font-normal flex md:pt-0 pt-[2rem] `} // Conditionally apply 'text-green-500' if active
          onClick={() => handleClick(index)}  // Set the active link on click
        >
          <NavLink to={list.link}  className={() =>
               color == index ? 'text-green-800' : 'text-black'
            }>
            {list.name} 
           
          </NavLink>
        </li>

      

        
      ))}


<ul className='md:hidden flex justify-between items-center mt-5'>
<li> <button className='flex justify-center h-[2.3rem] w-[8rem] md:w-[6rem] text-black items-center capitalize md:inline-block text-[14px] border-[1px] border-black'>
login          </button></li>
<li><button className='flex justify-center items-center h-[2.3rem] bg-black text-white   w-[8rem] md:w-[6rem] capitalize md:inline-block text-[14px] border-[1px] border-black'>
sign in          </button></li>
</ul>





          </ul>

          

      
        </nav>

        

        <div className={`hidden md:block   border-[1px] border-white w-[10rem] h-[2rem] gap-[1rem] md:flex md:justify-center items-center cursor`}  onClick={bookAppointment} >

          <button className='flex justify-center h-[2.3rem] w-[6rem] items-center capitalize md:inline-block text-[14px] border-[1px] border-black'>
login          </button>

<button className='flex justify-center items-center h-[2.3rem] bg-black text-white w-[6rem] capitalize md:inline-block text-[14px] border-[1px] border-black'>
sign in          </button>

        </div>

        </div>


     



      </div>

    </header>

  );
};

export default Navbar;
