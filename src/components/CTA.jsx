import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const topics = [
    { id: 1, title: "Accurate Demand Forecasting", detail: "Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions. ", image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bb2507621d0bf7da369_Demand%20forecasting-p-800.webp" },
    { id: 2, title: "HELIX: Workflow Automation", detail: "Build and automate custom S&OP workflows to enhance productivity and streamline your processes. Crest helps you get a bird's eye view of your supply chain, and help you do things a spreadsheet never can.", image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-800.webp" },
    { id: 3, title: "Automated Purchase Planning", detail: "Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.", image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64bd0e4b4b78267e66b04_Purchase%20planning-p-800.webp" },
    { id: 4, title: "Easy Integration", detail: "From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.", image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3395ea3f06_integration%20type-2.webp" },
    { id: 5, title: "Custom Dashboard", detail: "Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.", image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64366b9b4373ee32f68ac19c_dashboard%20ss-p-800.webp" },
    { id: 6, title: "Consensus Planning", detail: "Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning", image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6634db1d80804c8f875b196c_consen%20home%20-p-800.png" },
];

const CTASection = () => {
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleTopicClick = (topic) => {
        setSelectedTopic(selectedTopic && selectedTopic.id === topic.id ? null : topic);
    };

    return (
        <div className=" mx-auto md:pl-44 flex flex-col md:justify-center md:h-screen">
            <p className='md:text-5xl text-2xl px-4 font-bold text-center pb-10'>Things your spreadsheet wishes it could do</p>
            <div className="flex flex-col-reverse md:flex-row my-12">
                {/* Topics Section */}
                <div className="w-full md:w-1/2 px-6">
                    {topics.map((topic) => (
                        <div key={topic.id} className="mb-8">
                            <button
                                className="w-full text-left p-4 bg-clip-text bg-gradient-to-r to-purple-500 from-pink-500 border-2 text-transparent rounded-t-lg text-xl font-bold"
                                onClick={() => handleTopicClick(topic)}
                            >
                                {topic.title}
                            </button>
                            <CSSTransition
                                in={selectedTopic && selectedTopic.id === topic.id}
                                timeout={300}
                                classNames="dropdown"
                                unmountOnExit
                            >
                                <div className="p-4 text-white text-lg font-medium bg-gradient-to-r to-purple-500 from-pink-500 rounded-b-lg">
                                    {topic.detail}
                                </div>
                            </CSSTransition>
                        </div>
                    ))}
                </div>
                {/* Image Section */}
                    <div className="w-2/3 h-[20rem] px-6 mx-auto flex justify-center items-center bg-gradient-to-r to-purple-500 from-pink-500 rounded-xl md:h-[43rem]">
                        {selectedTopic ? (
                            <img src={selectedTopic.image} alt={selectedTopic.title} className="w-full h-auto rounded-lg shadow-lg" />
                        ) : (
                            <div className="text-white">Select a topic to see the image</div>
                        )}
                </div>
            </div>
            <div className='pt-4 pb-12 flex items-center justify-center'>
                <div className='w-fit items-center h-12 p-1 bg-gradient-to-r to-purple-500 from-pink-500 rounded-full transition duration-300 ease-in-out'>
                    <button className='w-fit bg-white px-6 py-2 rounded-full hover:bg-gradient-to-r hover:to-purple-500 hover:from-pink-500 text-transparent hover:text-white transition duration-300 ease-in-out'>
                        <span className='bg-gradient-to-r to-purple-500 from-pink-500 bg-clip-text p-1'>
                            See all Features
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
