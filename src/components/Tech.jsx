import React from 'react'
import { animate, backInOut, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { styles } from '../styles'
import { services, technologies } from '../constants'
import { fadeIn, fadeInCard, textVariant, textVariant1, slideIn }  from '../utils/motion';

import { SectionWrapper2 } from '../hoc'
import { standingman } from '../assets'
import { redirect } from 'react-router-dom'

const ServiceCard2 = ({ index, link, title, icon }) => {
  const redirectTo = () => {
    window.open(link, "_blank")
  }
  return (
    <div onClick={redirectTo}  className="xs:w-[190px] w-full cursor-pointer">
      <motion.div 
        variants={fadeIn("up", "spring", 0.5 * index, 1.75)}
        className = "w-full bg-[#131334e3]  p-[1px] rounded-[10%] shadow-cards "

      >

        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className=" rounded-[100px]
           py-5 px-12 min-h-[230px]  flex justify-evenly
           items-center flex-col"
        >

          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] 
          font-bold text-center ">{title}</h3>

        </div>
         
      </motion.div>
    </div>
  )
}

const Tech = () => {
  return (
    <>
    <div className='flex items-center justify-center'> 

    <motion.div
        className=" flex flex-row justify-center items-center text-center">
        <img
        className=" max-sm:hidden w-[20%] h-[30%]" src={standingman} alt="man-image" />
      <motion.div
      
      className="mt-20 flex flex-wrap gap-10">
        {technologies.map((service, index ) => (
          <ServiceCard2 key={service.title} index={index} link={service.link} {...service} />
          ))}

      </motion.div>
      
      </motion.div>
          </div>
      </>
  )
}

export default SectionWrapper2(Tech, "tech")