'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';


import p1 from "../../../public/recourses/Instagram.png"
import p2 from "../../../public/recourses/Snapchat.png"
import p3 from "../../../public/recourses/TikTok.png"
import p4 from "../../../public/recourses/Youtube.png"
import sc1 from "../../../public/recourses/Rectangle 17.png"
import sc2 from "../../../public/recourses/Rectangle 18.png"
import sc3 from "../../../public/recourses/Rectangle 19.png"
import sc4 from "../../../public/recourses/Rectangle 20.png"
import sc5 from "../../../public/recourses/Rectangle 100.png"

const WhereItWorks = () => {
  return (
    <div
    className='relative pt-16'
    >
      {/* Social media */}
      
      <Image 
          src={sc1}
          className='w-14 h-14 top-16 left-[950px] absolute'
          alt="Example of user-generated content"

      />      
      <Image 
          src={sc2}
          className='w-12 h-12 top-16 left-[550px] absolute '
          alt="Example of user-generated content"

      />      
      <Image 
          src={sc3}
          className='w-14 h-14 top-32 left-[350px] absolute'
          alt="Example of user-generated content"

      />      
      <Image 
          src={sc4}
          className='w-14 h-14 top-[210px] left-[1200px] absolute'
          alt="Example of user-generated content"

      />      
      <Image 
          src={sc5}
          className='w-14 h-14 top-[220px] left-[590px] absolute'
          alt="Example of user-generated content"

      />

      {/* Text content */}  
      <div
        className=' '
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
          className='mt-8 flex justify-center font-bold text-2xl text-[#3A3A3A]'
        >
        Instagram - Youtube - Snapchat - tiktok - Facebook
        </p>
      </div>

      <div
      className='flex justify-center  mt-[45px] h-[700px] '
      >
        <Image 
        src={p1}
        className='w-[300px] h-[625px] mr-4'
        alt="Example of user-generated content"

        />
        <Image 
        src={p2}
        className='w-[300px] h-[625px] mr-4 mt-20'
        alt="Example of user-generated content"

        />
        <Image 
        src={p3}
        className='w-[300px] h-[625px] mr-4'
        alt="Example of user-generated content"

        />
        <Image 
        src={p4}
        className='w-[300px] h-[625px] mt-20'
        alt="Example of user-generated content"

        />
      </div>

      
    </div>
  )
}

export default WhereItWorks