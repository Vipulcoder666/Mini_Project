import React from "react";

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8 lg:p-16">
        <h1 className="text-4xl font-extrabold text-indigo-700 text-center">
          Make Your Donation
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          Your contribution can change lives. Fill out the form below to donate.
        </p>

        {/* Donation Form */}
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Donation Amount */}
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Donation Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount in USD"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Message (Optional) */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Leave a message"
              className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          {/* Donate Button */}

          <a href="/Payment">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-md shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300"
          >
            Donate Now
          </button>
          </a>

        </div>
        

        {/* Thank You Message */}
        <p className="mt-6 text-center text-gray-500">
          Thank you for your generosity. Your support makes a real impact!
        </p>
      </div>
    </div>
  );
};

export default DonatePage;
