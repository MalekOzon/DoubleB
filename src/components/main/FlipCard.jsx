'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';


// Individual Flip Card Component
const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const variants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 },
  };

  return (
    <motion.div
      className="relative w-full h-[224px] rounded-lg overflow-hidden cursor-pointer"
      variants={variants}
      initial="front"
      animate={isFlipped ? 'back' : 'front'}
      transition={{ duration: 0.6 }}
      style={{ perspective: '1000px' }}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      aria-label="Flip card"
    >
      {/* Front Side */}
      <motion.div
        className="  relative overflow-hidden rounded-[16px]  w-full h-full flex flex-col items-center justify-center  text-white"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {frontContent}

        <div className="absolute bottom-3">
        {backContent}
        </div>
      </motion.div>
      
    </motion.div>
  );
};
export default FlipCard;