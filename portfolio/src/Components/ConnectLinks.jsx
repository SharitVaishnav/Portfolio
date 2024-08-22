import React from 'react'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";


const ConnectLinks = () => {
  return (<>
    <div className='flex flex-col h-full w-[10%] justify-end items-center fixed left-0 bottom-0 gap-7 max-[640px]:hidden'>
    <a href="https://github.com/SharitVaishnav"><FaGithub className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
        <a href="https://www.linkedin.com/in/sharit-vaishnav-159b26247/"><ImLinkedin2 className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
        <a href="https://leetcode.com/u/Sharit_Vaishnav/"><SiLeetcode className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
        <a href="https://www.codechef.com/users/sharit2846"><SiCodechef className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
      <div className='h-[20%] w-[1px] bg-slate-400'></div>
    </div>
    <div className='flex flex-col h-full w-[10%] justify-start items-center fixed right-0 bottom-0 pt-20 max-[640px]:hidden'>
    <div className='h-[20%] w-[1px] bg-slate-400'></div>
    <p className='text-slate-400 font-fontParagraph text-md rotate-90 mt-24 hover:text-blue1 hover:translate-y-1 transition duration-300'><a href="mailto:gopala2846@gmail.com">gopala2846@gmail.com</a></p>
</div>
<div className='flex w-full justify-center mb-24 pt-5 items-center absolute bottom-0 gap-7 min-[640px]:hidden'>
        <a href="https://github.com/SharitVaishnav"><FaGithub className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
        <a href="https://www.linkedin.com/in/sharit-vaishnav-159b26247/"><ImLinkedin2 className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
        <a href="https://leetcode.com/u/Sharit_Vaishnav/"><SiLeetcode className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
        <a href="https://www.codechef.com/users/sharit2846"><SiCodechef className='text-2xl text-slate-400 hover:text-blue1 hover:animate-bounce'/></a>
    </div>
    
</>

  )
}

export default ConnectLinks
