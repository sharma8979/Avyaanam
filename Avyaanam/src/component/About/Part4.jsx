import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <div>
     
      <section className="  sm:py-10 bg-red-400 px-4 sm:px-6 md:px-[10vw] lg:px-[12vw]">
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">New partners and experts</h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">2022</h1>
        </div>
        <div className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl w-full md:w-1/2">
          <h1 className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, adipisci vero
            et nesciunt id ipsum deleniti dolor quasi beatae exercitationem quo alias,
            minima molestias expedita eum aperiam provident optio corrupti!
          </h1>
        </div>
       <div className='w-full h-[30vw] bg-blue-200 mt-6'>
          
       </div>
      </section>
    </div>
  );
}

export default Header;
