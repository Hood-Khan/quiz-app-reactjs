import React from 'react'

function QuizComp() {
  return (
    <div className="w-full max-w-2xl bg-white/30 backdrop-blur-lg 
                    border border-white/40 rounded-2xl shadow-xl 
                    p-8">

      {/* Question */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        1. What is HTML?
      </h1>

      {/* Options */}
      <div className="flex flex-col gap-4 mb-8">
        <label htmlFor="1" className="flex items-center gap-3 
                                     bg-white/40 hover:bg-white/60 
                                     p-4 rounded-xl cursor-pointer 
                                     transition">
          <input type="radio" name="answer" value="1" id="1"
                 className="accent-green-600" />
          <span className="text-gray-800">Answer 1</span>
        </label>

        <label htmlFor="2" className="flex items-center gap-3 
                                     bg-white/40 hover:bg-white/60 
                                     p-4 rounded-xl cursor-pointer 
                                     transition">
          <input type="radio" name="answer" value="2" id="2"
                 className="accent-green-600" />
          <span className="text-gray-800">Answer 2</span>
        </label>

        <label htmlFor="3" className="flex items-center gap-3 
                                     bg-white/40 hover:bg-white/60 
                                     p-4 rounded-xl cursor-pointer 
                                     transition">
          <input type="radio" name="answer" value="3" id="3"
                 className="accent-green-600" />
          <span className="text-gray-800">Answer 3</span>
        </label>

        <label htmlFor="4" className="flex items-center gap-3 
                                     bg-white/40 hover:bg-white/60 
                                     p-4 rounded-xl cursor-pointer 
                                     transition">
          <input type="radio" name="answer" value="4" id="4"
                 className="accent-green-600" />
          <span className="text-gray-800">Answer 4</span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-start gap-4">
        <button className="px-6 py-2 rounded-full bg-gray-300 
                           hover:bg-gray-400 transition">
          Prev
        </button>

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
  )
}

export default QuizComp
