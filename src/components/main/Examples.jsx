'use client'
import { motion } from "framer-motion";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ImgsExamples } from "@/utils/ExamplesIMGs";
import AutoScroll from "embla-carousel-auto-scroll";

const Examples = () => {
  return (
    <div >
      <div className="w-full flex justify-center">
        <div className="relative w-fit">
          <h1 className="font-bold text-4xl z-[3] relative">
            Examples to spark ideas for your User-Generated Content
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

      <div className="mx-auto mt-10 w-[100%]">
        <Carousel
          plugins={[
            AutoScroll({
              speed: 1.25, // Adjust this value for smoothness (e.g., 0.5, 1, 2)
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          opts={{
            loop: true,
            draggable: false,
          }}
          className="w-full will-change-transform" // Optimize animations
        >
          <CarouselContent>
            {ImgsExamples.map((Img, index) => (
              <CarouselItem key={index} className="basis-1/6">
                <div className="w-[100%]">
                  <div className="relative rounded-[24px] h-[400px] overflow-hidden">
                    <Image
                      className="object-cover w-full h-full"
                      src={Img.src}
                      alt="Example of user-generated content"
                      width={400} // Optimized size
                      height={400}
                    />
                    <div className="absolute inset-0 shadow-inner shadow-black/25 pointer-events-none"></div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Examples;