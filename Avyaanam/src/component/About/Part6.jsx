import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div>
     
      <section className="  sm:py-10 px-4 sm:px-6 md:px-[10vw] lg:px-[12vw]">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Our Founder</h1>

          <h1 className="font-light  w-80 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, adipisci vero
            et nesciunt id ipsum deleniti dolor quasi beatae exercitationem quo alias,
            minima molestias 
          </h1>
    
        </div>
        <div className="flex flex-col sm:flex-row mt-6 sm:mt-8 justify-between">
          <motion.div 
            className="h-[30vw] sm:h-[20vw] md:h-[25vw] w-full sm:w-[45vw] lg:w-[25vw] bg-blue-200"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-3xl'>Kushagra Dahaniya</h1>
          </motion.div>
          <motion.div 
            className="h-[30vw] sm:h-[20vw] md:h-[25vw] w-full sm:w-[45vw] lg:w-[25vw] bg-blue-300 mt-4 sm:mt-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl mt-4 p-4 md:p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate totam qui, dicta molestias quos fuga?
            </h1>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Header;
