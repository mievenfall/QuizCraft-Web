// Result.js
import React from 'react';

const Result = ({ score, totalQuestions, resetQuiz }) => {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>
        You scored {score} out of {totalQuestions} questions.
      </p>
      <button onClick={resetQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Result;