import React from 'react'
import WelcomeComp from './components/WelcomeComp'
import QuizComp from './components/QuizComp'
import ResultComp from './components/ResultComp'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-amber-400 via-orange-300 to-yellow-200">
      
      {/* 80% width wrapper */}
      <div className="w-[80%] flex flex-col items-center gap-16">

        {/* Each child will stretch */}
        <div className="w-full">
          <WelcomeComp />
        </div>

        <div className="w-full">
          <QuizComp />
        </div>

        <div className="w-full">
          <ResultComp />
        </div>

      </div>
    </div>
  )
}

export default App
