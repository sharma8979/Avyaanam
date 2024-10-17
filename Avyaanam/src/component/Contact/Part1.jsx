import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';


const ContactUs = () => {
  return (
    <div className="container mx-auto   py-[1]">
     <header className=" px-4 sm:px-8 md:px-[10vw] lg:px-[13vw] py-10 sm:py-[12vw]">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-[4vw] lg:text-[3vw] border-b-4 font-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
        Contact Us        </motion.h1>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        {/* Contact Information */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p><strong>Email:</strong> support@healingwebsite.com</p>
          <p><strong>Phone:</strong> +1 (234) 567-8901</p>
          <p><strong>Address:</strong> 123 Healing Lane, Wellness City, ST 12345</p>
          <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <Link to="#" className="text-blue-600">Facebook</Link>
            <Link to="#" className="text-blue-400">Twitter</Link>
            <Link to="#" className="text-blue-700">Instagram</Link>
            <Link to="#" className="text-blue-500">LinkedIn</Link>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form action="#" method="POST" noValidate>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-10">
        <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside">
          <li>
            <Link to="/about" className="text-blue-600 hover:underline">Learn more about our healing practices</Link>
          </li>
          <li>
            <Link to="/services" className="text-blue-600 hover:underline">Explore our services</Link>
          </li>
          <li>
            <Link to="/testimonials" className="text-blue-600 hover:underline">Read client testimonials</Link>
          </li>
          <li>
            <Link to="/blog" className="text-blue-600 hover:underline">Visit our blog for wellness tips</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
