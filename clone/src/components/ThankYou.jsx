import React from "react";

const ThankYouPage = ({ name = "John Doe", amount = 50 }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Ticket Header */}
        <div className="bg-indigo-600 text-white text-center py-6">
          <h1 className="text-3xl font-bold">Thank You!</h1>
          <p className="mt-2">Your generosity makes a difference.</p>
        </div>

        {/* Ticket Body */}
        <div className="px-8 py-6">
          <p className="text-center text-gray-700 text-lg">
            Dear <span className="font-semibold">{name}</span>,
          </p>
          <p className="text-center text-gray-600 mt-4">
            We sincerely appreciate your donation of{" "}
            <span className="font-bold text-indigo-600">${amount}</span>.
          </p>

          <div className="my-8">
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg">
              <p className="text-center text-gray-500 text-sm">
                Payment Confirmation Code
              </p>
              <h2 className="text-center text-indigo-700 font-bold text-xl tracking-wide">
                {Math.random().toString(36).substring(2, 10).toUpperCase()}
              </h2>
            </div>
          </div>

          <p className="text-center text-gray-600 text-sm">
            Your support helps us continue our mission to make the world a
            better place.
          </p>
        </div>

        {/* Ticket Footer */}
        <div className="bg-gray-100 text-gray-500 text-center py-4">
          <p>&copy; 2024 Donation Platform. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
