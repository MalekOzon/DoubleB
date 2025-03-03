'use client'
import { motion } from 'framer-motion';
import FlipCard from "./FlipCard";
import Image from 'next/image';
import why1 from '../../../public/recourses/why1.png'
import why2 from '../../../public/recourses/why2.png'
import why3 from '../../../public/recourses/why3.png'
import why4 from '../../../public/recourses/why4.png'

const FourFlipCards = () => {
  const cardData = [
    {
      front: (
        <>
          <Image
            className="object-cover w-full h-full cursor-default"
            src={why1}
            alt="Example of user-generated content"
            width={1000} // Optimized size
            height={1000}
          />
        </>
      ),
      back: <p className=" text-xl font-bold">Affordable Content</p>,
    },
    {
      front: (
        <>
          <Image
            className="object-cover w-full h-full cursor-default"
            src={why2}
            alt="Example of user-generated content"
            width={1000} // Optimized size
            height={1000}
          />
        </>
      ),
      back: <p className=" text-xl font-bold">Time saving</p>,
    },
    {
      front: (
        <>
          <Image
            className="object-cover w-full h-full cursor-default"
            src={why3}
            alt="Example of user-generated content"
            width={1000} // Optimized size
            height={1000}
          />
        </>
      ),
      back: <p className=" text-xl font-bold">Content Creators Hub</p>,
    },
    {
      front: (
        <>
         <Image
            className="object-cover w-full h-full cursor-default"
            src={why4}
            alt="Example of user-generated content"
            width={1000} // Optimized size
            height={1000}
          />
        </>
      ),
      back: <p className=" text-xl font-bold">Quick Video Requests</p>,
    },
  ];

  return (
   <div className="mt-20 mx-[117px]">
        <div className="w-full mb-[44px] ">
        <div className="relative w-fit">
          <h1 className="font-bold text-4xl z-[3] relative">
          Why choose us?
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
    <section className=" ">
      <div className="container ">

        <div className="flex flex-row justify-center space-x-6">
          {cardData.map((card, index) => (
            <FlipCard
              key={index}
              frontContent={card.front}
              backContent={card.back}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default FourFlipCards;