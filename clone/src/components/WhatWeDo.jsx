import React from "react";
// import impactImage from "../assets/impact.jpg";
import education from "../assets/education.webp";
import healthcare from "../assets/healthcare.webp";
import community from "../assets/community.avif";
import innovation from "../assets/innovation.webp";
import environment from "../assets/environment.webp";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-700 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold">What We Do</h1>
          <p className="mt-6 text-lg lg:text-xl leading-relaxed">
            At our platform, we empower communities through impactful
            initiatives. From education to healthcare, every action we take
            drives positive change in people's lives.
          </p>
        </div>
      </header>

      {/* Highlighted Services Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-indigo-700">
            Our Core Areas of Focus
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore the key areas where your contributions create real impact.
          </p>
        </div>

        <div className="grid gap-12 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-6 text-center">
            <img
              src={education}
              alt="Education"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-700">Education</h3>
            <p className="text-gray-600 mt-4">
              We provide access to quality education for children and adults,
              opening doors to better opportunities and brighter futures.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-6 text-center">
            <img
              src={healthcare}
              alt="Healthcare"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-700">Healthcare</h3>
            <p className="text-gray-600 mt-4">
              Your support ensures access to medical facilities, essential
              treatments, and health awareness programs in underprivileged
              areas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-6 text-center">
            <img
              src={community}
              alt="Community Building"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-700">
              Community Building
            </h3>
            <p className="text-gray-600 mt-4">
              We foster unity by creating safe spaces and opportunities for
              community growth through skill-building and support systems.
            </p>
          </div>
        </div>
      </section>

      {/* Secondary Services Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-6 text-center">
            <img
              src={innovation}
              alt="Innovation"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-700">Innovation</h3>
            <p className="text-gray-600 mt-4">
              We invest in technological solutions to address pressing
              challenges and create sustainable changes.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-6 text-center">
            <img
              src={environment}
              alt="Environment"
              className="w-full rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-indigo-700">Environment</h3>
            <p className="text-gray-600 mt-4">
              Protecting our planet through conservation efforts, clean energy
              projects, and reducing waste in communities.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Together, We Can Achieve More
          </h2>
          <p className="mt-6 text-lg">
            Join us on our mission to make a difference. Every step matters.
          </p>
          <a href="/DonatePage">
            <button className="mt-8 bg-yellow-400 text-indigo-800 font-semibold py-3 px-12 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">
              Support Us Today
            </button>
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Donation Platform. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default WhatWeDo;
