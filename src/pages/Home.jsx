import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <Footer />
        </div>
    );
};

export default Home;
