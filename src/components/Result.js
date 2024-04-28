import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { quizData, selectedOptions } = state || {};

  const calculateScore = () => {
    let score = 0;
    quizData.forEach((question) => {
      if (selectedOptions[question.question] === question.answer) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your score: {score} / {quizData.length}</p>
      <button onClick={() => navigate('/start')}>Back</button>
    </div>
  );
};

export default Result;