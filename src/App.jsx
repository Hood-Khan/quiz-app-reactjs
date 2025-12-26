import React, { useState } from 'react'
import WelcomeComp from './components/WelcomeComp'
import QuizComp from './components/QuizComp'
import ResultComp from './components/ResultComp'

function App() {

  const [showScreen,setShowScreen] = useState('welcome');

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-amber-400 via-orange-300 to-yellow-200">
      
      {/* 80% width wrapper */}
      <div className="w-[80%] flex flex-col items-center">

        {/* Each child will stretch */}
        <div className="w-full">
          {showScreen=='welcome' && <WelcomeComp {...{showScreen,setShowScreen}} />}
        </div>

        <div className="w-full">
          {showScreen=='quiz' && <QuizComp {...{showScreen,setShowScreen}} />}
        </div>

        <div className="w-full">
          {showScreen=='result' && <ResultComp {...{showScreen,setShowScreen}} />}
        </div>

      </div>
    </div>
  )
}

export default App
