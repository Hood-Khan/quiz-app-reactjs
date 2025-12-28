import React from 'react'
import quiz from '../api/quiz.json'

function ResultComp({showScreen,setShowScreen,answers,setAnswers}) {

  const totalQuestions = quiz.length
  const attemptQuestions = answers.length
  const totalCorrect = answers.length>0 ? answers.filter((cur)=>{
    const questions = quiz.find((c)=>c.id == cur.id)
    return questions.correct_option === cur.answer
  }) : []

  const totalIncorrect = answers.length>0 ? answers.filter((cur)=>{
    const questions = quiz.find((c)=>c.id == cur.id)
    return questions.correct_option !== cur.answer
  }) : []

  const percent = (totalCorrect.length/attemptQuestions)*100;
  
  return (
    <div className="w-full bg-white/30 backdrop-blur-lg 
                    border border-white/40 rounded-2xl shadow-xl 
                    py-12 px-6">

      <div className="max-w-3xl mx-auto text-center">

        <h1 className="text-4xl font-bold text-green-700 mb-8">
          🎉 You Scored {totalCorrect.length} / {totalQuestions}
        </h1>
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Percentage: {percent}%
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white/40 rounded-xl p-6 text-lg font-medium text-gray-800">
            ✅ Correct Answers  
            <div className="text-3xl font-bold mt-2">{totalCorrect.length}</div>
          </div>

          <div className="bg-white/40 rounded-xl p-6 text-lg font-medium text-gray-800">
            ❌ Incorrect Answers  
            <div className="text-3xl font-bold mt-2">{totalIncorrect.length}</div>
          </div>
        </div>

        <button 
        onClick={()=>window.location.reload()}
        className="px-10 py-3 bg-green-600 hover:bg-green-700 
                           text-white font-semibold rounded-full 
                           transition shadow-lg">
          Restart Quiz
        </button>

      </div>
    </div>
  )
}

export default ResultComp
