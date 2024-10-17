import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div data-scroll
    data-scroll-section
    data-scroll-speed="-0.7">
      <motion.section
        className="sm:py-10 bg-red-400 px-4 sm:px-6 md:px-[10vw] lg:px-[12vw]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            Increasing Clients
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            variants={itemVariants}
            transition={{ delay: 0.4 }}
          >
            2022
          </motion.h1>
        </div>
        <motion.div
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl w-full md:w-1/2"
          variants={itemVariants}
          transition={{ delay: 0.6 }}
        >
          <h1 className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, adipisci vero
          </h1>
        </motion.div>
        <motion.div
          className='w-full md:w-3/4 h-[30vw] bg-blue-200 mt-6 py-10'
          variants={itemVariants}
          transition={{ delay: 0.8 }}
        >
          <div className='flex flex-col sm:flex-row justify-between px-4 sm:px-28'>
            <div className="flex flex-col items-center">
              <h1 className='text-[5vw]'>6</h1>
              <h1 className='text-[2vw]'>Years</h1>
            </div>
            <div className='flex justify-center font-bold items-center text-6xl'>
              <h1 >--></h1>
            </div>
            <div className="flex flex-col items-center">
              <h1 className='text-[5vw]'>80</h1>
              <h1 className='text-[2vw]'>Companies</h1>
            </div>
          </div>
          <motion.div className='mt-10 px-4 sm:px-10 text-3xl font-light' variants={itemVariants} transition={{ delay: 1 }}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo cum optio architecto aspernatur non exercitationem fuga!</h1>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Header;
