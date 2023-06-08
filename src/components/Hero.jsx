import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import  Computers from './canvas/Computers'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
        {/* gradient line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div  className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        {/* Name */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#4B4CF8]'>Bruno</span></h1>
          <p className={`${styles.heroSubText}`}> I'm a frontend developer. I build <br  className='sm:block hidden'/> mobile and web applications </p>
        </div>
      </div>

      <Computers />
    </section>
  )
}

export default Hero