import React, { useState } from 'react';

const blogs = [
    {
        title: 'Purchase Planning: How to Get the Most Out of a Supply Chain Management Software?',
        date: 'Jun 21, 2022',
        image: 'https://picsum.photos/id/237/200/300',
    },
    {
        title: 'How Sleepy Owl Built India\'s Biggest D2C Coffee Brand!',
        date: 'Jun 10, 2022',
        image: 'https://picsum.photos/id/238/200/300',
    },
    {
        title: 'Methods for Improving Inventory Management and Demand Fulfillment',
        date: 'Jun 30, 2022',
        image: 'https://picsum.photos/id/23/200/300',
    },
    {
        title: 'Purchase Planning2: How to Get the Most Out of a Supply Chain Management Software?',
        date: 'Jun 21, 2022',
        image: 'https://picsum.photos/id/27/200/300',
    },
    {
        title: 'How Sleepy Owl Built India\'s Biggest D2C Coffee Brand!',
        date: 'Jun 10, 2022',
        image: 'https://picsum.photos/id/37/200/300',
    },
    {
        title: 'Methods for Improving Inventory Management and Demand Fulfillment',
        date: 'Jun 30, 2022',
        image: 'https://picsum.photos/id/287/200/300',
    },
];

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex flex-col md:flex-row items-center p-8 bg-gray-100 h-[45rem]">
            <div className="md:w-1/3 mb-8 md:mb-0 pl-28 h-full md:pt-20">
                <h1 className="text-3xl font-bold mb-4 ">Delivered: The Crest blog</h1>
                <p className="mb-4 font-medium text-lg">
                    Insights from years of working in various supply-chain roles (and an itch to write). We hope you find these posts interesting!
                </p>
                <div className="flex space-x-2 pt-4 font-extrabold">
                    <button onClick={handlePrevClick} className="p-2 w-10 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                        &lt;
                    </button>
                    <button onClick={handleNextClick} className="p-2 w-10 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                        &gt;
                    </button>
                </div>
            </div>
            <div className="md:w-2/3 w-full overflow-hidden flex h-full">
                <div className="flex transition-transform duration-50" style={{ transform: `translateX(-${currentIndex * 16.5}%)` }}>
                    {blogs.map((blog, index) => (
                        <div key={index} className=" p-4 w-[30rem] ">
                            <div className="bg-white p-4 rounded-lg h-[35rem] shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <img src={blog.image} alt={blog.title} className="w-full h-3/4 object-cover rounded-t-lg mb-4" />
                                <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                                <p className="text-sm text-gray-500">{blog.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex transition-transform duration-50" style={{ transform: `translateX(-${currentIndex * 16.5}%)` }}>
                    {blogs.map((blog, index) => (
                        <div key={index} className=" p-4 w-[30rem] ">
                            <div className="bg-white p-4 rounded-lg h-[35rem] shadow-lg transform transition-transform duration-300 hover:scale-105 ">
                                <img src={blog.image} alt={blog.title} className="w-[28rem] h-3/4 object-cover rounded-t-lg mb-4" />
                                <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                                <p className="text-sm text-gray-500">{blog.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
