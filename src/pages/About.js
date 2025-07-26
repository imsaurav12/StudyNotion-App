import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col justify-center items-center px-4 text-white text-center relative">
      <h1 className="text-4xl font-bold text-yellow-50 mb-6">
        About StudyNotion
      </h1>
      <p className="text-richblack-200 text-lg max-w-2xl mb-10">
        StudyNotion is a modern learning platform designed to empower students with quality content,
        intuitive tools, and a seamless experience to explore, grow, and succeed in their academic journey.
      </p>

      <div className="absolute bottom-0 left-0 w-full bg-richblack-800 text-richblack-200 py-3 px-6 text-sm text-center border-t border-richblack-700">
        📚 Built by learners, for learners — Keep exploring with StudyNotion!
      </div>
    </div>
  );
};

export default About;
