import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './component/Homepage/Homepage';
import Services from './component/Services/Services';
import Courses from './component/Courses/courses';
import About from './component/About/About'; // Assuming you have an About component
import { Navbar } from './component/Homepage/Navbar';
import Footer from './component/Homepage/Footer';
import ContactUs from './component/Contact/ContactUs';

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '/about-us',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
]);

const App = () => {
  return (
    <div className='w-full min-h-screen '>
    
      <RouterProvider router={router} />
     
    </div>
  );
};

export default App;
