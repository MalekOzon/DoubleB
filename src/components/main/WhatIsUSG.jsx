'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Frame29 from '../../../public/recourses/Frame 29.png' 

const Forth = () => {
  return (
    <div
      className=' flex w-full mt-20'
    > 
      {/* photo */}
      <div
      className='ml-[112px]'
      >
        <Image
          src={Frame29}
          alt="s"
          className='w-[448px] h-[308px]  '
        />
      </div>


      {/* content */}
      <div
        className='mr-[92px]  '
      >
        <div className="w-full flex justify-center">
        <div className="relative w-fit">
          <h1 className="font-bold text-4xl z-[3] relative">
          Where it works?
          </h1>
          <motion.div
            className="bg-[#FFDF40] z-[2] w-full h-[10px] absolute bottom-1 left-0"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </div>
      </div>
        <p
          className='ml-[48px] font-bold w-[739px] h-[136px] text-2xl text-[#3A3A3A]'
        >
        User-Generated Content (UGC) videos are created and
        produced by the audience or customers, rather than by 
        companies or professionals. These videos are often 
        spontaneous, making them more authentic and relatable.
        </p>
      </div>
    </div>
  )
}

export default Forth