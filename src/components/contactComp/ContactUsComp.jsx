import React from "react";

const ContactUsComp = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-center text-lg text-gray-600 mb-8" data-aos="fade-up">
        Do you have a question or want to share your feedback with us?
        <br />
        You are welcome to contact us in one of the following ways:
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Contact Form */}
        <div
          className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8"
          data-aos="fade-right"
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full border border-gray-300 p-3 rounded h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 md:pl-8" data-aos="fade-left">
          <div className="space-y-8">
            <div className="flex items-center">
              <span className="inline-block text-yellow-500 text-2xl mr-4">
                📍
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">Address</h3>
                <p className="text-gray-600">
                  66 Great Suffolk Street, London, United Kingdom, SE1 0BL
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="inline-block text-yellow-500 text-2xl mr-4">
                ✉️
              </span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Email Address
                </h3>
                <p className="text-gray-600">info@10xsignal.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsComp;
