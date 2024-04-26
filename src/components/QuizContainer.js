// QuizContainer.js
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import quizData from '../data/quizData';

const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (selectedOption) => {
    // Check if the selected option is correct
    const isCorrect = quizData[currentQuestion].answer === selectedOption;

    // Update the score if the answer is correct
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // If no more questions, show the result
      setCurrentQuestion(nextQuestion);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <Question
          question={quizData[currentQuestion]}
          handleOptionSelect={handleOptionSelect}
        />
      ) : (
        <Result
          score={score}
          totalQuestions={quizData.length}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
};

export default QuizContainer;