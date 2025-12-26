import React from 'react'

function WelcomeComp() {
  return (
    <div className="w-full bg-white/30 backdrop-blur-lg border border-white/40 
                    rounded-2xl shadow-xl py-14 px-6 my-20">

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Quiz App 🎯
        </h1>

        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
          Challenge yourself with interactive quizzes on 
          <span className="font-semibold"> HTML, CSS, and JavaScript</span>.  
          Track your progress and improve your skills step by step.
        </p>

        <button className="px-8 py-3 bg-green-600 hover:bg-green-700 
                           text-white font-semibold rounded-full 
                           transition duration-300 shadow-lg">
          Get Started
        </button>
      </div>

    </div>
  )
}

export default WelcomeComp
