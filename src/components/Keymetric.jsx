import React, { useState, useEffect } from 'react';
import './Keymetric.css';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Keymetric = () => {
    const [activeMetric, setActiveMetric] = useState(1);

    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView1) setActiveMetric(1);
        if (inView2) setActiveMetric(2);
        if (inView3) setActiveMetric(3);
    }, [inView1, inView2, inView3]);

    return (
        <div>
            <div className="bg-zinc-950 h-screen flex sticky overflow-hidden top-0 text-white">
                <img
                    src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d23caea3ebf_gradient-bg.svg"
                    alt=""
                    className="-z-10 align-middle h-[100%] absolute top-auto left-auto w-full inline-block"
                />
                <div className="container h-full mx-auto py-12 px-10">
                    <div className="flex justify-center space-x-4 py-4 text-xl">
                        <button
                            className={`py-4 px-4 rounded-lg w-60 ${activeMetric === 1 ? 'bg-purple-700' : 'bg-gray-700'}`}
                            onClick={() => setActiveMetric(1)}
                        >
                            Stockouts
                        </button>
                        <button
                            className={`py-2 px-4 rounded-lg w-60 ${activeMetric === 2 ? 'bg-purple-700' : 'bg-gray-700'}`}
                            onClick={() => setActiveMetric(2)}
                        >
                            Cash Recovery Cycle
                        </button>
                        <button
                            className={`py-2 px-4 rounded-lg w-60 ${activeMetric === 3 ? 'bg-purple-700' : 'bg-gray-700'}`}
                            onClick={() => setActiveMetric(3)}
                        >
                            Revenue
                        </button>
                    </div>
                    <div className="flex flex-col w-full h-full relative">
                        <div
                            id="section-1"
                            ref={ref1}
                            className={`metric-section flex flex-col items-center justify-center text-center w-full h-screen absolute overflow-hidden transition-opacity duration-500 ${activeMetric === 1 ? 'opacity-1' : 'opacity-0'
                                }`}
                        >
                            {activeMetric === 1 && (
                                <div>
                                    <h1 className="text-5xl font-bold text-center">
                                        <div className='flex justify-center items-end font-serif gap-2 bg-clip-text text-transparent bg-gradient-to-r to-purple-500 from-pink-500'><CountUp start={0} end={85} duration={5} className='text-[12rem] size-56 font-bold' />
                                        <p className='text-white'>%</p></div>
                                    </h1>
                                    <p className="text-center text-4xl mt-4 font-serif">
                                        Reduction in Out-of-stock
                                    </p>
                                </div>
                            )}
                        </div>
                        <div
                            id="section-2"
                            ref={ref2}
                            className={`metric-section flex flex-col items-center justify-center text-center w-full h-screen absolute overflow-hidden transition-opacity duration-500 ${activeMetric === 2 ? 'opacity-1' : 'opacity-0'
                                }`}
                        >
                            {activeMetric === 2 && (
                                <div>
                                    <h1 className="text-5xl font-bold text-center">
                                        <div className='flex justify-center items-end font-serif bg-clip-text gap-2  text-transparent bg-gradient-to-r to-purple-500 from-pink-500'><CountUp start={0} end={25} duration={5} className='text-[12rem] size-56 font-bold' />
                                        <p className='text-white'>Days</p></div>
                                    </h1>
                                    <p className="text-center text-4xl mt-4 font-serif">    
                                    Reduction in cash recovery time
                                    </p>
                                </div>
                            )}
                        </div>
                        <div
                            id="section-3"
                            ref={ref3}
                            className={`metric-section flex flex-col items-center justify-center text-center w-full h-screen absolute overflow-hidden transition-opacity duration-500 ${activeMetric === 3 ? 'opacity-1' : 'opacity-0'
                                }`}
                        >
                            {activeMetric === 3 && (
                                <div>
                                    <h1 className="text-5xl font-bold text-center">
                                        <div className='flex justify-center items-end font-serif bg-clip-text gap-2 text-transparent bg-gradient-to-r to-purple-500 from-pink-500'><CountUp start={0} end={15} duration={5} className='text-[12rem] size-56 font-bold' />
                                        <p className='text-white'>%</p></div>
                                    </h1>
                                    <p className="text-center text-4xl mt-4 font-serif">
                                        Growth in revenue
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keymetric;
