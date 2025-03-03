'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import like from '../../../public/recourses/like.png'
import Image from 'next/image';
import { ugcTypes } from '@/utils/USG';

const TypeOfUSG = () => {
  // State to track which section is expanded (default is the first section)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-20 mx-[117px]" >

      <div className="w-full flex justify-center">
        <div className="relative w-fit">
          <h1 className="font-bold text-4xl z-[3] relative">
            Type of UGC 
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

    <div className="flex w-full h-[400px] mt-[44px] ">
      {ugcTypes.map((type, index) => (
        <motion.div
          key={index}
          className={`border border-gray-300 rounded-lg p-2 cursor-pointer flex flex-col justify-between bg-white`}
          // Animation for width change
          animate={{
            width: activeIndex === index ? '80%' : '6.5%',
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          onClick={() => setActiveIndex(index)}
          // Accessibility attribute
          aria-expanded={activeIndex === index}
        >
          {/* Content inside each section */}
          <div className={`flex flex-col items-center  ${activeIndex === index?'text-left px-[32px] cursor-default':'text-center  justify-between'} border-solid border-2 border-[#C4C4C4] h-full rounded-[16px] py-[25px] `}>
            <span className="text-pink-500 text-2xl font-semibold w-full">
              {type.number}
            </span>
            <h2 className={`text-black text-xl font-bold mt-2 ${activeIndex === index&&'hidden'}`} style={{writingMode: activeIndex !== index &&'sideways-lr'}} >{type.title}</h2>

            {/* Expanded content (description and button) */}
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3,  delay:0.5 }}
                className="mt-4 flex justify-between"
              >
                <div className="w-[50%]">
                  <h1 className="text-[32px] font-bold">
                      {type.title}
                  </h1>

                  <p className="text-[20px] font-bold mt-[45px]">
                      {type.description}
                  </p>
                </div>

                <div className="w-[50%] h-[408px] -mt-[15%] -mr-[6.5%] z-[2]">
                <Image
                  className="object-cover w-full h-full cursor-default"
                  src={like}
                  alt="Example of user-generated content"
                  width={1000} // Optimized size
                  height={1000}
                />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default TypeOfUSG;