import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Part5 = () => {
  return (
    <motion.div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.7"
      className="p-10 sm:p-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-10">
        <h1 className="text-[5vw] sm:text-[4vw] px-5 sm:px-20">
          We founded Grow Partners to be the ideal buyer for our businesses. Drawing
          from our negative experiences with private equity firms, we adopted a different approach.
        </h1>
      </div>
      <div className="text-center">
        <Link
          className="bg-orange-500 text-xl px-6 py-4 sm:px-10 sm:py-5 mb-6 rounded transition duration-300 hover:bg-orange-600"
          to=""
        >
          GET AN OFFER
        </Link>
      </div>
    </motion.div>
  );
};

export default Part5;
