import React from 'react'

function QuizComp() {
  return (
    <div className="w-full bg-white/30 backdrop-blur-lg 
                    border border-white/40 rounded-2xl shadow-xl 
                    p-6 sm:p-10 my-10">

      <div className="max-w-4xl mx-auto">

        {/* Question */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          1. What is HTML?
        </h1>

        {/* Options */}
        <div className="flex flex-col gap-4 mb-10">
          {["Answer 1", "Answer 2", "Answer 3", "Answer 4"].map((ans, i) => (
            <label
              key={i}
              htmlFor={`${i + 1}`}
              className="flex items-center gap-4 
                         bg-white/40 hover:bg-white/60 
                         p-4 rounded-xl cursor-pointer 
                         transition active:scale-[0.98]"
            >
              <input
                type="radio"
                name="answer"
                id={`${i + 1}`}
                className="accent-green-600"
              />
              <span className="text-gray-800 text-lg">{ans}</span>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-start">
          <button className="px-6 py-2 rounded-full bg-gray-300 
                             hover:bg-gray-400 transition">
            Prev
          </button>

          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-blue-600 
                               hover:bg-blue-700 text-white transition">
              Next
            </button>

            <button className="px-6 py-2 rounded-full bg-green-600 
                               hover:bg-green-700 text-white transition">
              Submit Quiz
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default QuizComp
