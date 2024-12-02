import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-purple-700">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          We’d love to hear from you! Reach out with any questions or feedback.
        </p>
        
        {/* Contact Form */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 lg:flex lg:gap-8">
          {/* Left Side */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700">
              Get in Touch
            </h3>
            <p className="mt-4 text-gray-600">
              Fill out the form, and our team will get back to you as soon as
              possible.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full text-purple-700">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 font-medium">Phone</p>
                  <p className="text-gray-600">+91 7897516265</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full text-purple-700">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 font-medium">Email</p>
                  <p className="text-gray-600">vipulmpgi@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full text-purple-700">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 font-medium">Address</p>
                  <p className="text-gray-600">MPEC Kanpur, Uttar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Message
                </label>
                <textarea
                  className="w-full mt-2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-purple-500"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-700">
            Find Us Here
          </h3>
          <div className="mt-8 w-full h-64 bg-gray-200 rounded-lg shadow-lg">
            {/* Replace this with an embedded map iframe */}
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093294!2d144.95373541531684!3d-37.81627974201379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2eec733%3A0xfb1d3a7cc2e67a6c!2sCharity%20Street!5e0!3m2!1sen!2sus!4v1674475756932!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
