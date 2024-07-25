import React from 'react'
import { motion } from 'framer-motion'


const Contact = () => {
  return (
    <motion.section 
      className="mt-40 p-20 pb-40"
      initial = {{opacity : 0,y:25}}
      transition = {{delay : 1, duration : 1}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      >
      <div className='bg-Blue flex flex-col justify-center items-center' id = "contact">
        <div className='w-[32rem] flex flex-col justify-center items-center max-[640px]:w-[18rem]'>
        <h1 className='text-slate-200 text-5xl font-semibold font-fontHeading  text-center max-[640px]:text-3xl'>Get In Touch</h1>
        <br />
        <p className='text-slate-400 font-sans text-lg text-center max-[640px]:text-base tracking-wide'>Feel free to reach out if you'd like to collaborate on exciting projects or discuss 
            potential work opportunities. I'm always open to new challenges and eager to contribute 
            to innovative endeavors. Let's connect and create something amazing together!</p>
            <br />
            <div className=' h-12 w-[138px] rounded-md  relative z-0'>
            <button className='text-blue1 text-base border border-blue1 px-6 font-fontHeading py-3 rounded-md tracking-widest hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-300 absolute z-10'><a href="gopala2846@gmail.com">Say Hello</a></button>
            </div>
        </div>
      </div>
      </motion.section>
  )
}

export default Contact
