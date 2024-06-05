import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KeyProblem from "./components/KeyProblem";
import Keymetric from "./components/Keymetric";
import Scroll from "./components/Scroll";
import CTASection from "./components/CTA";
import SlideShow from "./components/Slides";
import Blogs from "./components/Blogs";

function App() {
  return (
    <div className="">
    <Navbar/>
    <Hero/>
    <KeyProblem/>
    <Keymetric/>
    <Scroll/>
    <CTASection/>
    <SlideShow/>
    <Blogs/>
    <Footer/>
    </div>
  );
}

export default App;
