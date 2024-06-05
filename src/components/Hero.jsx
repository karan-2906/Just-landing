import React, { useState } from 'react'
import img1 from "../assets/img1.png"
import img from "../assets/img.svg"

const Hero = () => {
    return (
        <div className='md:px-8 pt-12 justify-center bg-no-repeat bg-cover h-screen text-white ' style={{ backgroundImage: `url(https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d7eb5ea3efb_home-hero-bg.svg)`, }}>
            <div className='md:flex items-center justify-center h-full mx-28'>
                <div className='md:w-3/5 flex flex-col justify-center '>
                    <div className='font-bold text-7xl'>Every order <br />
                        fulfilled,
                        <span className='bg-clip-text bg-gradient-to-r to-purple-500 from-pink-500  text-transparent'> On time.</span>
                    </div>
                    <br />
                    <p className='md:w-2/3 w-full md:text-lg font-semibold'>Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.</p>
                    <br />
                    <div className='flex'>
                        <div className='w-fit h-12 p-1 bg-gradient-to-r to-purple-500 from-pink-500 rounded-full transition duration-300 ease-in-out'>
                            <button className='w-fit bg-white px-6 py-2 rounded-full hover:bg-gradient-to-r hover:to-purple-500 hover:from-pink-500 text-transparent hover:text-white transition duration-300 ease-in-out'>
                                <span className='bg-gradient-to-r to-purple-500 from-pink-500 bg-clip-text p-1'>
                                    Get Started
                                </span>
                            </button>
                        </div>
                        <div className='mt-4 p-2'>
                            <img src={img} alt="" />
                        </div>
                    </div>


                </div>
                <div className='w-2/5'>
                    <img src={img1} alt="" className='w-full ' />
                </div>
            </div>
        </div>
    )
}

export default Hero