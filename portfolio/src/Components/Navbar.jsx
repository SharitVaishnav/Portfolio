import React, { useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false);

  function clickHandeler(){
    if(menuOpen){
      setMenuOpen(false);
    }
    else setMenuOpen(true);
  }



  return (

    menuOpen ? (<div className='h-full w-full flex justify-center fixed items-center bg-Blue  backdrop-blur-sm opacity-95 animate-menubar z-10'>
      <button className='hidden max-[640px]:flex absolute top-6 right-10' onClick={()=>clickHandeler()}><IoClose className='text-4xl text-blue1 font-bold' /></button>
      <div className=''>
      <ol className='flex flex-col text-head text-sm gap-7 marker:text-green-300 font-mono items-center animate-menuOl'>
          <li onClick={()=>clickHandeler()}><span className='text-blue1'>1. </span><a href="/#" className=''> Home</a></li>
          <li onClick={()=>clickHandeler()}><span className='text-blue1'>2. </span><a href = "#about"> About Me</a></li>
          <li onClick={()=>clickHandeler()}><span className='text-blue1'>3. </span> <a href='#project'>Projects</a></li>
          <li onClick={()=>clickHandeler()}><span className='text-blue1'>4. </span> <a href = "#contact">Contact</a></li>
          <li><button className='text-blue1 text-sm border border-blue1 px-3 font-fontHeading py-2 rounded-md tracking-widest hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300'><a href="Sharit's Resume.pdf">Resume</a></button></li>
        </ol>
      </div>

    </div>) :


    (<><div className='w-full h-20 fixed top-0 left-0 bg-Blue  backdrop-blur-sm opacity-95 z-10'>
    <nav className='flex justify-between items-center h-full mx-10'>
      <div className='h-14 w-14'>
        <img src="sha.png" alt="logo" className='h-full w-full'/>
      </div>
      <div className='flex gap-7'>
        <ol className='flex text-head text-sm gap-7 marker:text-green-300 font-fontParagraph items-center max-[640px]:hidden'>
          <li><span className='text-blue1'>1. </span><a href="/#"> Home</a></li>
          <li><span className='text-blue1'>2. </span><a href = "#about"> About Me</a></li>
          <li><span className='text-blue1'>3. </span> <a href='#project'>Projects</a></li>
          <li><span className='text-blue1'>4. </span> <a href = "#contact">Contact</a></li>
        </ol>
        <button className='text-blue1 text-sm border border-blue1 px-3 font-fontHeading py-2 rounded-md hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300'><a href="Sharit's Resume.pdf">Resume</a></button>
        <button className='hidden max-[640px]:flex' onClick={()=>clickHandeler()}><TbMenuDeep className='text-4xl text-blue1 font-bold' /></button>
      </div>
    </nav>
    </div></>)
  )
}

export default Navbar
