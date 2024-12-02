import React from "react";
import one from "../assets/one.avif";
import Trustworthy from "../assets/Trustworthy.webp";
import Transparency from "../assets/Transparency.webp";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50">
     
      {/* Navbar */}
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-opacity-95 shadow-lg">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo */}
    <div className="text-white font-bold text-2xl hover:scale-105 transition-transform duration-300">
      <a href="/">Donation Platform</a>
    </div>
    
    {/* Navigation Links */}
    <div className="flex space-x-8">
      <a
        href="/WhatWeDo"
        className="text-white font-medium hover:text-yellow-400 transition-colors duration-300 hover:scale-105"
      >
        What We Do
      </a>
      <a
        href="/AboutUs"
        className="text-white font-medium hover:text-yellow-400 transition-colors duration-300 hover:scale-105"
      >
        About Us
      </a>
      <a
        href="/ContactUs"
        className="text-white font-medium hover:text-yellow-400 transition-colors duration-300 hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white pt-20">
        <div className="container mx-auto px-6 py-16 text-center lg:text-left">
          <div className="lg:flex items-center justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold lg:text-6xl leading-tight">
                Make a Difference Today
              </h1>
              <p className="mt-6 text-lg lg:text-xl leading-relaxed">
                Join us in creating a better world. Your donations can change
                lives and empower communities.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="/DonatePage">
                  <button className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                    Donate Now
                  </button>
                </a>
                <button className="bg-indigo-800 py-3 px-8 rounded-full shadow-lg text-white hover:bg-indigo-900 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0">
              <img
                src={one}
                alt="Donation illustration"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section
        id="what-we-do"
        className="py-16 bg-gradient-to-b from-white to-gray-100"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800">
            Why Donate with Us?
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Discover how your contributions make a lasting impact.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={Transparency}
                alt="Transparency"
                className="w-20 h-20 mx-auto"
              />
              <h3 className="text-xl font-semibold mt-6 text-center">
                Transparency
              </h3>
              <p className="mt-4 text-center text-gray-600">
                Every penny is accounted for. Track your impact in real-time.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={Trustworthy}
                alt="Impactful"
                className="w-20 h-20 mx-auto"
              />
              <h3 className="text-xl font-semibold mt-6 text-center">
                Impactful
              </h3>
              <p className="mt-4 text-center text-gray-600">
                See the difference you make in people’s lives every day.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={Trustworthy}
                alt="Trustworthy"
                className="w-20 h-20 mx-auto"
              />
              <h3 className="text-xl font-semibold mt-6 text-center">
                Trustworthy
              </h3>
              <p className="mt-4 text-center text-gray-600">
                Partnered with vetted organizations for maximum accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        id="about-us"
        className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Ready to Make a Difference?</h2>
          <p className="mt-4 text-lg lg:text-xl">
            Your support means everything. Start your journey with us today.
          </p>
          <a href="/DonatePage">
            <button className="mt-8 bg-white text-indigo-700 font-semibold py-3 px-12 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Donate Now
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact-us"
        className="bg-gray-800 text-gray-300 py-8"
      >
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">
            &copy; 2024 Donation Platform. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
