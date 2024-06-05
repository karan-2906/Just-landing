import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const slides = [
    {
        id: 1,
        title: "A focus on KPIs that matter",
        description: "Our tools help you make decisions to grow your business. Everything works towards improving cash flow and product availability.",
        image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d486cea3f09_Focus%20on%20KPIs%20that%20matter.svg",
    },
    {
        id: 2,
        title: "Ease of use, for everyone",
        description: "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use..",
        image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg",
    },
    {
        id: 3,
        title: "Purpose-built & ever-improving tech",
        description: "Our demand forecasting engine has been meticulously-built, while our ML engine constantly trains on years of data and is ever-evolving..",
        image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg",
    },
    {
        id: 4,
        title: "Deep domain expertise",
        description: "Our team members have years of experience leading supply chains for businesses ranging from $10M to $10B.",
        image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a2c8d8b6a42e610f78e10d_expert%201-p-500.png",
    },
];

const SlideShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('next');

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection('next');
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentSlide]);

    const handleNextClick = () => {
        setDirection('next');
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handlePrevClick = () => {
        setDirection('prev');
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className=' flex items-center justify-center h-screen'>
            <div className="relative w-full md:w-3/4 h-[45rem] flex items-center justify-center overflow-hidden  rounded-lg ">
                <TransitionGroup className="w-full h-full ">
                    {slides.map((slide, index) => (
                        currentSlide === index && (
                            <CSSTransition
                                key={slide.id}
                                timeout={500}
                                classNames={direction === 'next' ? 'slide-next' : 'slide-prev'}
                            >
                                <div className="absolute w-full h-full flex   items-center justify-center p-10">
                                    <div className='bg-gray-200 flex flex-col items-center h-[45rem] p-8 rounded-3xl'>
                                        <img src={slide.image} alt={slide.title} className="md:w-1/2  object-cover rounded-lg" />
                                        <div className="md:w-1/2 h-full flex flex-col justify-center p-6">
                                            <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
                                            <p className="text-lg">{slide.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        )
                    ))}
                </TransitionGroup>

                <button
                    onClick={handlePrevClick}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full w-10"
                >
                    &#x276E;
                </button>
                <button
                    onClick={handleNextClick}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full w-10"
                >
                    &#x276F;
                </button>
            </div>
        </div>
    );
};

export default SlideShow;
