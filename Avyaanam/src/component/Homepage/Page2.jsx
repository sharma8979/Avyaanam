import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';


const Page2 = () => {
  return (
    <div className='flex w-full mi'>
      <div className='w-1/2'></div>
      <div className='w-1/2'>
        <div className='p-20'>
          <motion.h1
            className='text-4xl'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Presenting Ourselves
          </motion.h1>
        </div>
        <div className='px-20  font-light'>
          <motion.h1
            className='text-2xl mb-4'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius vel accusamus
            at mollitia, earum, quaerat alias quidem hic sequi ducimus pariatur aut deleniti nobis!
            Voluptatem quos autem iure quidem!
          </motion.h1>
          <motion.h1
            className='text-2xl'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius vel accusamus
            at mollitia, earum, quaerat alias quidem hic sequi ducimus pariatur aut deleniti nobis!
            Voluptatem quos autem iure quidem!
          </motion.h1>
        </div>

        <div className='py-10'>
            <Link to="/about-us"
            className='bg-black text-white px-10 py-5 rounded-full mx-20 '
            >
            Read More
            </Link>
        </div>

      </div>
    </div>
  );
}

export default Page2;
