import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ isLoggedIn }) => {
  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col justify-center items-center px-4 text-white text-center relative">
      <h1 className="text-3xl sm:text-5xl font-bold text-yellow-50 mb-4 animate-pulse leading-tight">
        Welcome to StudyNotion 👋
      </h1>

      <p className="text-richblack-300 max-w-md sm:max-w-xl mb-8 text-base sm:text-lg">
        Your personalized learning platform where students connect, learn, and grow together.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none justify-center">
        {isLoggedIn ? (
          <Link to="/dashboard" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow transition-all duration-200">
              Go to Dashboard
            </button>
          </Link>
        ) : (
          <>
            <Link to="/login" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow transition-all duration-200">
                Login
              </button>
            </Link>
            <Link to="/signup" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-transparent border border-white px-6 py-3 rounded-lg text-white hover:bg-white hover:text-richblack-900 transition-all duration-200">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-richblack-800 text-richblack-200 py-3 px-6 text-sm text-center border-t border-richblack-700">
        🛠️ Currently working on this project. Full version coming soon. Stay tuned!
      </div>
    </div>
  );
};

export default Home;
