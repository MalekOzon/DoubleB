'use client'
import React ,{useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import how from '../../../public/recourses/howitwork.png'
import Image from 'next/image';
import { steps } from '@/utils/HowItWorks';
const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <div className="mt-20 mx-[117px]">

      <div className="w-full ">
        <div className="relative w-fit">
          <h1 className="font-bold text-4xl z-[3] relative">
            How it works?
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

      <div className="h-[464px] py-[64px] pl-[32px] rounded-[24px] border-solid flex justify-between mt-[22px] w-full border-2 border-[#C4C4C4]">

          <div className="w-[50%]">
            <div className=" max-w-[800px] mx-auto my-0 p-5">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={"mb-5"}
                  >
                    <h2
                      className={`${activeStep === step.number ? 'text-[#3A3A3A]' : 'text-[#C4C4C4]'} text-2xl font-bold cursor-pointer`}
                      onClick={() => setActiveStep(step.number)}
                    >
                      {step.number}. {step.title}
                    </h2>
                    <AnimatePresence>
                      {activeStep === step.number && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="mt-[10px] text-xl font-bold">
                            {step.paragraph}
                          </p>
                          <motion.button
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#5962FE] hover:bg-[#F501A8] transition-colors ease-in-out duration-500 text-white py-[10px] px-5 rounded-[8px] border-none mt-[10px] cursor-pointer"

                          >
                            {step.buttonText}
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
            </div>

          </div>

          <div>

          <Image
            className="object-cover w-full h-full"
            src={how}
            alt="Example of user-generated content"
            width={400} // Optimized size
            height={400}
          />
            
          </div>

      </div>
    
    </div>
  )
}

export default HowItWorks