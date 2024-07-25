import React from 'react'
import Profile from "../profile.jpeg";
import { motion } from 'framer-motion';

const About = () => {
  return (
      <motion.section 
      id = "about"
      className="mt-40 z-0"
      initial = {{opacity : 0,y:25}}
      transition = {{delay : 1, duration : 1}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
      <div  className= {`flex flex-wrap-reverse justify-between items-center pt-3 max-[800px]:justify-center  px-32 max-[640px]:px-5 bg-Blue`}>
        <div className='h-[22rem] w-[18rem] relative group max-[640px]:mx-auto max-[640px]:h-[20rem] max-[640px]:w-[18rem]'>
            <div className='h-[20rem] w-[18rem] max-[640px]:h-[18rem] max-[640px]:w-[16rem] border-2 border-blue1 absolute rounded-md top-1 left-1  group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-800'></div>
            <img src={Profile} alt="" className='h-[20rem] w-[18rem] max-[640px]:h-[18rem] max-[640px]:w-[16rem] border-2 border-blue1 absolute top-5 left-5 rounded-md group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-800'/>
            </div>
        <div className='relative w-[34rem] h-[30rem] max-[640px]:h-[45rem]'>
          <div className='bg-slate-400 h-[1px] w-[20rem] absolute top-4 opacity-30 left-0 max-[640px]:w-[10rem]'></div>
          <span className='text-slate-200 font-semibold text-3xl absolute top-0 right-0 font-fontHeading'>About Me</span>
          <div className='absolute top-12'>
          <p className='text-slate-400 font-fontParagraph text-base text-justify opacity-80 max-[640px]:text-base'>Hello! I'm <span className='text-blue1 font-semibold'>Sharit</span>, a passionate Full Stack MERN Developer with a knack for crafting responsive 
            and user-friendly web applications. My technical skill set includes <span className='text-blue1 font-semibold'>MongoDB, Express.js, ReactJS,
             Node.js, HTML,</span> and <span className='text-blue1 font-bold'>CSS</span>, enabling me to build robust and dynamic web solutions from the ground up.</p>
             <br />
             <p className='text-slate-400 font-fontParagraph text-base text-justify opacity-80 max-[640px]:text-base'>
             I am currently pursuing a B.Tech in Computer Science with a specialization in AI/ML at <span className='text-blue1 font-semibold'>IIIT
              Nagpur</span>. </p><br />
             <p className='text-slate-400 font-fontParagraph text-base text-justify opacity-80 max-[640px]:text-base'>Besides web development, I actively practice Data Structures and Algorithms (DSA) on <span className='text-blue1 font-semibold'><a href="https://codeforces.com/profile/Sharit_2846">LeetCode</a> </span>
               and compete on platforms like <span className='text-blue1 font-semibold'><a href="https://codeforces.com/profile/Sharit_2846">Codeforces</a></span> and <span className='text-blue1 font-semibold'><a href="https://www.codechef.com/users/sharit2846">CodeChef</a></span>. My problem-solving skills have 
               been honed by tackling over <span className='text-blue1 font-semibold'>500+</span> problems across these platforms, enhancing my ability to write efficient and 
               optimized code.</p><br />
              <p className='text-slate-400 font-fontParagraph text-base text-justify opacity-80 max-[640px]:text-base'>When I'm not coding, you can find me exploring new tech trends, 
              Feel free to reach out if you'd like to collaborate or just chat about all things tech!</p>
          </div>
        </div>
      </div>
      </motion.section>
  )
}

export default About
