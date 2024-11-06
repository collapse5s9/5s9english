// src/components/Quiz.js
import React, { useState } from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      onComplete && onComplete((score + (selectedOption === questions[currentQuestion].correct ? 1 : 0)) / questions.length * 100);
    }
  };

  return (
    <div className="quiz-container p-4">
      {!showResults ? (
        <div className="question-container">
          <h3 className="text-lg font-semibold mb-4">
            {questions[currentQuestion].question}
          </h3>
          <div className="grid gap-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-2 text-left rounded border hover:bg-blue-50"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-container text-center">
          <h3 className="text-xl font-bold mb-4">Quiz terminé !</h3>
          <p className="text-lg">Score: {Math.round((score / questions.length) * 100)}%</p>
        </div>
      )}
    </div>
  );
};
