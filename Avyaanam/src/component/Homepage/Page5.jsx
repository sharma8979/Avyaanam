import React from 'react';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

const LandingPage = () => {
  // Animation for each word
  const textJumpAnimation = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: [0, -30, 0], // Jump effect
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className=''>
      <div className='py-48 flex flex-col items-center'>
        <div className='flex gap-6 justify-center h-32'>
          <motion.h1
            className='text-8xl'
            variants={textJumpAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }} // Delay for the first word
          >
            We Are 
          </motion.h1>
          <div className='h-20 mt-3 w-40 bg-black rounded-full'></div>
          <motion.h1
            className='text-8xl'
            variants={textJumpAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }} // Delay for the second word
          >
            Waiting
          </motion.h1>
          <div className='h-20 mt-3 w-40 bg-black rounded-full'></div>
        </div>

        <div className='flex gap-6 justify-center'>
          <motion.h1
            className='text-8xl'
            variants={textJumpAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }} // Delay for the third word
          >
           to Connect
          </motion.h1>
          <div className='h-20 mt-3 w-40 bg-black rounded-full'></div>
          <motion.h1
            className='text-8xl'
            variants={textJumpAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }} // Delay for the fourth word
          >
            You
          </motion.h1>
          <div className='h-20 w-32 mt-3 bg-black rounded-full'></div>
        </div>

        <motion.div
          className='w-full md:w-1/2 mt-10 text-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h1 className='text-2xl font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio placeat saepe tempore sed
            voluptatum quam sint odit sapiente a ratione vero totam praesentium temporibus nihil, facere 
            quis incidunt ab! Dignissimos.
          </h1>
        </motion.div>

        <motion.div
          className='flex  justify-center mt-10'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button
            type="button"
            className="text-white text-xl bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg px-5 py-2.5 flex items-center"
          >
            
            Enroll Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
