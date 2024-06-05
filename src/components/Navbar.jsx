import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [isTop, setIsTop] = useState(true);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    let lastScrollTop = 0;

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        // Show/hide navbar on scroll
        if (scrollTop > lastScrollTop) {
            setShow(false);
        } else {
            setShow(true);
        }
        setIsTop(scrollTop === 0);
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed w-full text-white py-4 transition-all duration-300 ${show ? 'top-0' : '-top-16'} ${isTop ? '' : 'bg-opacity-70 backdrop-blur-sm'}`}>
            <div className='flex justify-between items-center mx-auto px-6 md:px-24'>
                <div>
                    <img src={logo} alt="Logo" className="h-9" />
                </div>
                <div className="hidden md:flex items-center justify-between text-blue-500">
                    <ul className="flex gap-8">
                        {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                            <li
                                key={index}
                                className="relative hover:text-orange-300"
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {item}
                                {hoveredItem === index && (
                                    <div className="absolute left-0 mt-1 w-48 bg-white text-black rounded-md shadow-lg">
                                        <ul className="py-2">
                                            {item === 'Home' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Home Option 1</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Home Option 2</li>
                                                </>
                                            )}
                                            {item === 'Services' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Service 1</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Service 2</li>
                                                </>
                                            )}
                                            {item === 'Projects' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Project 1</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Project 2</li>
                                                </>
                                            )}
                                            {item === 'About' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">About Us</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Our Team</li>
                                                </>
                                            )}
                                            {item === 'Contact' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Contact Form</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Locations</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='hidden md:flex gap-8'>
                    <button className="px-4 py-2  font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r to-purple-500 from-pink-500 hover:bg-gradient-to-l  hover:text-white rounded-3xl">Sign up</button>
                    <button className="px-4 py-2 bg-gradient-to-r font-semibold to-purple-500 from-pink-500 hover:bg-gradient-to-l  hover:text-black rounded-3xl">Talk to us</button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center mt-4 backdrop-blur-3xl pb-4 bg-gray-400 bg-opacity-70">
                    <ul className="flex flex-col gap-4 text-blue-500">
                        {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item, index) => (
                            <li
                                key={index}
                                className="relative hover:text-orange-300"
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {item}
                                {hoveredItem === index && (
                                    <div className="absolute left-0 mt-1 w-48 bg-white text-black rounded-md shadow-lg">
                                        <ul className="py-2">
                                            {item === 'Home' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Home Option 1</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Home Option 2</li>
                                                </>
                                            )}
                                            {item === 'Services' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Service 1</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Service 2</li>
                                                </>
                                            )}
                                            {item === 'Projects' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Project 1</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Project 2</li>
                                                </>
                                            )}
                                            {item === 'About' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">About Us</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Our Team</li>
                                                </>
                                            )}
                                            {item === 'Contact' && (
                                                <>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Contact Form</li>
                                                    <li className="px-4 py-2 hover:bg-gray-200">Locations</li>
                                                </>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className='flex flex-col gap-4 mt-4'>
                        <button className="px-4 py-2 text-transparent font-bold text-xl bg-clip-text bg-gradient-to-r to-purple-500 from-pink-500 hover:bg-gradient-to-l  hover:text-white rounded-3xl">Sign up</button>
                        <button className="px-4 py-2 bg-gradient-to-r font-semibold to-purple-500 from-pink-500 hover:bg-gradient-to-l  hover:text-black rounded-3xl">Talk to us</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
