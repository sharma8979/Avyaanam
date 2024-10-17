import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Web Development",
    description: "Learn to build responsive and interactive websites.",
    image: "https://images.unsplash.com/photo-1517242022020-4f0a2bcd61d6",
    link: "/courses/web-development",
    duration: "8 weeks",
    level: "Beginner",
  },
  {
    title: "Data Science",
    description: "Analyze data and make data-driven decisions.",
    image: "https://images.unsplash.com/photo-1498050108023-c524b9d0e8b1",
    link: "/courses/data-science",
    duration: "10 weeks",
    level: "Intermediate",
  },
  // ...other courses
];

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
      
      {/* Hero Section */}
      <div className="relative w-full  h-96 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative  flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl mt-20 font-bold">Expand Your Skills</h1>
          <p className="mt-2">Join our diverse range of courses.</p>
          <Link to="/courses" className="mt-4 bg-white text-black rounded-lg px-4 py-2 hover:bg-gray-200 transition">
            View Courses
          </Link>
        </div>
      </div>

      {/* Filter Options */}
      <div className="mt-10 text-center">
        <Link to="/courses" className="mx-2 px-4 py-2 bg-black text-white rounded">All Courses</Link>
        <Link to="/courses/technology" className="mx-2 px-4 py-2 bg-gray-200 text-black rounded">Technology</Link>
        <Link to="/courses/business" className="mx-2 px-4 py-2 bg-gray-200 text-black rounded">Business</Link>
        <Link to="/courses/creative" className="mx-2 px-4 py-2 bg-gray-200 text-black rounded">Creative</Link>
      </div>

      {/* Course Cards */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-5 transition-transform transform hover:scale-105"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold">{course.title}</h2>
            <p className="mt-2 text-gray-600">{course.description}</p>
            <p className="mt-1 text-gray-500">Duration: {course.duration}</p>
            <p className="mt-1 text-gray-500">Level: {course.level}</p>
            <Link
              to={course.link}
              className="mt-4 inline-block text-white bg-black rounded-lg px-4 py-2 hover:bg-gray-800 transition"
            >
              Explore
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-black pl-4 mb-6">
            <p className="italic">"The Web Development course was life-changing! I now work as a developer."</p>
            <footer className="mt-2 text-right">— Alex Johnson</footer>
          </blockquote>
          <blockquote className="border-l-4 border-black pl-4 mb-6">
            <p className="italic">"I gained invaluable skills in data analysis and visualization."</p>
            <footer className="mt-2 text-right">— Sarah Lee</footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
