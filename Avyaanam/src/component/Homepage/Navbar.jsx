import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <header className="p-6 z-[999] ml-20 rounded-lg w-[90%] fixed mt-8 bg-black sm:py-6">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="shrink-0">
                            <Link to="/" title="" className="flex">
                                <h1 className='text-white text-2xl'>Avyaanam</h1>
                            </Link>
                        </div>

                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-white"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                                aria-label="Toggle navigation"
                            >
                                <span aria-hidden="true">
                                    {expanded ? (
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </span>
                            </button>
                        </div>

                        <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
                            <Link to="/" className="text-base font-normal text-white transition-all duration-200 "> Home </Link>
                            <Link to="/services" className="text-base font-normal text-white transition-all duration-200 "> Services </Link>
                            <Link to="/courses" className="text-base font-normal text-white transition-all duration-200 "> Courses </Link>
                            <Link to="/about-us" className="text-base font-normal text-white transition-all duration-200 "> About Us </Link>
                            <Link to="/contact-us" className="text-base font-normal text-white transition-all duration-200 "> Contact Us </Link>
                        </nav>
                    </div>

                    {expanded && (
                        <nav className="md:hidden">
                            <div className="flex flex-col pt-8 pb-4 space-y-6">
                                <Link to="/" className="text-base font-normal text-white transition-all duration-200 "> Home </Link>
                                <Link to="/services" className="text-base font-normal text-white transition-all duration-200 "> Services </Link>
                                <Link to="/courses" className="text-base font-normal text-white transition-all duration-200 "> Courses </Link>
                                <Link to="/about-us" className="text-base font-normal text-white transition-all duration-200 "> About Us </Link>
                                <Link to="/contact-us" className="text-base font-normal text-white transition-all duration-200 "> Contact Us </Link>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </div>
    );
};
