import React from "react";
import mission from "../assets/mission.avif"; // Replace with your actual image path
import vision from "../assets/vision.avif"; // Replace with your actual image path
import teamImage from "../assets/linkedin.jpeg"; // Replace with your actual image path
import prince from "../assets/prince.jpg"; // Replace with your actual image path
import sumit from "../assets/sumit.png"; // Replace with your actual image path
import tulsi from "../assets/tulsi.jpg"; // Replace with your actual image path

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-lg lg:text-xl">
            Dedicated to making a positive difference in the world.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:flex items-center">
          <div className="lg:w-1/2">
            <img
              src={mission}
              alt="Our Mission"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-700">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our mission is to empower communities and transform lives through
              impactful donations and dedicated efforts. We work tirelessly to
              ensure that every contribution makes a meaningful difference.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:flex items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-700">
              Our Vision
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We envision a world where generosity and compassion drive
              sustainable change. By connecting donors with causes they care
              about, we aim to create a brighter future for everyone.
            </p>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={vision}
              alt="Our Vision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl lg:text-4xl font-bold text-purple-700">
      Meet Our Team
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      A passionate group of individuals working together to drive change.
    </p>
    <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {/* Team Member 1 */}
      <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <div className="relative">
          <img
            src={teamImage}
            alt="Team Member"
            className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-gray-300 hover:border-indigo-600 transition duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold mt-6">Vipul Shrivastav</h3>
        <p className="mt-2 text-gray-600">Team Lead and Developer</p>
      </div>
      {/* Team Member 2 */}
      <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <div className="relative">
          <img
            src={tulsi}
            alt="Team Member"
            className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-gray-300 hover:border-indigo-600 transition duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold mt-6">Tulsi Gupta</h3>
        <p className="mt-2 text-gray-600"> Developer</p>
      </div>
      {/* Team Member 3 */}
      <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <div className="relative">
          <img
            src={prince}
            alt="Team Member"
            className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-gray-300 hover:border-indigo-600 transition duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold mt-6">Prince Sharma</h3>
        <p className="mt-2 text-gray-600">Developer</p>
      </div>
      {/* Team Member 4 */}
      <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        <div className="relative">
          <img
            src={sumit}
            alt="Team Member"
            className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-gray-300 hover:border-indigo-600 transition duration-300"
          />
        </div>
        <h3 className="text-xl font-semibold mt-6">Sumit Pal</h3>
        <p className="mt-2 text-gray-600">Content Creater</p>
      </div>
    </div>
  </div>
</section>




      {/* Call-to-Action */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Join Us in Making a Difference
          </h2>
          <p className="mt-4 text-lg lg:text-xl">
            Together, we can create a world where generosity thrives.
          </p>
          <button className="mt-8 bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
