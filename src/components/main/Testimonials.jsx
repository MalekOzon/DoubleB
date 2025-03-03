'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import frame35 from "../../../public/recourses/Rectangle 35.png"
import linkedin from "../../../public/recourses/Rectangle 39.png"
import bih from "../../../public/recourses/Group.png"
import x from "../../../public/recourses/Rectangle 36.png"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const Testimonials = () => {
  return (
    <div className='my-16  '>
      {/* Title */}
      <div className="w-full flex justify-center">
        <div className="relative w-fit">
          <h1 className="font-bold text-4xl z-[3] relative">
          Testimonials
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

      {/* Buttons */}
      <div className='mt-8 flex justify-center ' >
        <button className='w-[400px] h-12 bg-[#F501A8] font-bold text-white felx justify-center mr-8 rounded-xl' >
          Creators
        </button>
        <button className='w-[400px] h-12 bg-[#5962FE] font-bold text-white felx justify-center rounded-xl' >
          Brands
        </button>
      </div>

      {/* Content */}
      <Carousel className="w-[65%] mx-auto " 
                opts={{
                loop: true,
              }}
      >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='mt-8 flex justify-center  '>
              <div className='flex justify-center  border-solid border-[#C4C4C4] rounded-xl font-bold border-2 p-8'>
                <Image src={frame35} alt="Example of user-generated content" className='w-[230px] h-[224px] mr-7' />
                <div className=' mt-6'>
                  <h3>
                  Mohammad Shaheen
                  </h3>
                  <p className='mt-6 text-[#3A3A3A] w-[600px] font-bold text-base'>
                  I enjoy creating videos for brands throughout my career in content creation.
                  During this journey, I have been very happy with my ratings and achieving 
                  over 100 videos for brands across various cities in Syria.
                  </p>
                  <div className='mt-6 flex '>
                    <Image src={linkedin} alt="Example of user-generated content" className='w-[23px] h-[23px] mr-2' />
                    <Image src={x} alt="Example of user-generated content" className='w-[23px] h-[23px] mr-2' />
                    <Image src={bih} alt="Example of user-generated content" className='w-[23px] h-[23px]' />
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
     
    </div>
  )
}

export default Testimonials