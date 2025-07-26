import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col justify-center items-center px-4 text-white text-center relative">
      <h1 className="text-4xl font-bold text-yellow-50 mb-6">
        Contact Me
      </h1>

      <div className="text-richblack-200 text-lg space-y-4 mb-10">
        <p>📧 Email: <a href="mailto:sauravraj.codes@gmail.com" className="text-blue-400 hover:underline">sauravraj.codes@gmail.com</a></p>
        <p>📞 Phone: <a href="tel:+916204016811" className="text-blue-400 hover:underline">+91 6204016811</a></p>
        <p>💻 GitHub: <a href="https://github.com/imsaurav12" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">imsaurav12</a></p>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-richblack-800 text-richblack-200 py-3 px-6 text-sm text-center border-t border-richblack-700">
        📬 We're just a message away. Feel free to reach out!
      </div>
    </div>
  );
};

export default Contact;
