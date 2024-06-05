import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center py-20  bg-gray-900">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-purple-700 text-white rounded-3xl p-8 md:p-40 w-3/4  text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          You can grow faster than you think!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Plan with Crest to fulfill your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.
        </p>
        <button className="bg-black text-white rounded-full py-3 px-6 hover:bg-gray-800 transition-colors">
          Get started with Crest
        </button>
      </div>
    </div>
  );
};

export default Contact;
