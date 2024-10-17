import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black mx-10 mb-6 rounded-3xl '>
      <div className='flex flex-col  md:flex-row gap-[20vw]'>
        <div className='p-[5vw]'>
          <h1 className='text-white bg-green-600 w-60 flex justify-center p-7 rounded-full text-4xl font-bold'>Subscribe</h1>
          <h1 className='text-white border w-80 flex justify-center p-7 rounded-full text-4xl font-bold'>To Our Work</h1>
        </div>
        <div className='text-white text-3xl gap-3 flex-col flex mt-10 md:mt-20'>
          <Link to="/">Home</Link>
          <Link to="/services">Service</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className='flex items-center ml-20 gap-[10vw]  mt-6'>
        <div className='flex mb-6'>
        <input className='mt-4 p-4 w-[20vw] md:w-[25vw] placeholder-gray-400' placeholder='Enter Your Email' type="email" />
        <button type='submit' className='mt-4 ml-4 justify-center rounded-lg items-center flex p-4 w-32 text-xl text-white border'>Send</button>
        </div>
        <div className='flex ml-4 space-x-4'>
          <Link to="https://facebook.com" target="_blank">
            <FaFacebook className='text-white text-2xl hover:text-gray-400' />
          </Link>
          <Link to="https://twitter.com" target="_blank">
            <FaTwitter className='text-white text-2xl hover:text-gray-400' />
          </Link>
          <Link to="https://instagram.com" target="_blank">
            <FaInstagram className='text-white text-2xl hover:text-gray-400' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
