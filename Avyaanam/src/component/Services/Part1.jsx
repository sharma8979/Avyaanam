import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../Homepage/Navbar';

const services = [
  
  {
    title: "Consultation",
    description: "Expert advice to help you make informed decisions.",
    image: "https://images.unsplash.com/photo-1544005313-94bb990f1c4d",
    link: "/services/consultation", // Add your link here
  },
  {
    title: "Workshops",
    description: "Interactive sessions to enhance your skills.",
    image: "https://images.unsplash.com/photo-1521791136060-3c6b489c8f51",
    link: "/services/workshops",
  },
  {
    title: "Online Courses",
    description: "Flexible learning options to suit your schedule.",
    image: "https://images.unsplash.com/photo-1502767086638-e9d9c9c8e3c7",
    link: "/services/online-courses",
  },
  {
    title: "Networking Events",
    description: "Connect with professionals in your field.",
    image: "https://images.unsplash.com/photo-1586073216404-4bc11a4b6f1c",
    link: "/services/networking-events",
  },
  {
    title: "Coaching",
    description: "Personalized guidance to help you achieve your goals.",
    image: "https://images.unsplash.com/photo-1495562071441-8a2e47a6a0cf",
    link: "/services/coaching",
  },
  {
    title: "Mentorship",
    description: "Learn from experienced professionals.",
    image: "https://images.unsplash.com/photo-1510805708132-56b8a2f89e0b",
    link: "/services/mentorship",
  },
  {
    title: "Community Support",
    description: "Join a network of like-minded individuals.",
    image: "https://images.unsplash.com/photo-1573497498618-760f0a947d77",
    link: "/services/community-support",
  },
];

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="py-48 flex flex-col items-center">
        <motion.h1
          className="text-6xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-center w-2/3"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore the various services we offer to enhance your experience.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-5"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <Link
                to={service.link}
                className="mt-4 inline-block text-white bg-black rounded-lg px-4 py-2 hover:bg-gray-800 transition"
              >
                Explore
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
