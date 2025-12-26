import React from 'react'

function WelcomeComp() {
  return (
    <div className="w-full max-w-xl bg-white/30 backdrop-blur-lg border border-white/40 
                    rounded-2xl shadow-xl flex flex-col items-center text-center 
                    py-10 px-6 my-20">

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to Our Quiz App 🎯
      </h1>

      <p className="text-gray-700 text-lg mb-6">
        We're glad to have you here. Test your skills in HTML, CSS & JavaScript!
      </p>

      <button className="px-6 py-3 bg-green-600 hover:bg-green-700 
                         text-white font-semibold rounded-full 
                         transition duration-300 shadow-lg">
        Get Started
      </button>
    </div>
  )
}

export default WelcomeComp
