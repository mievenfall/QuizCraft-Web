import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Result.css';

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
  const scorePercent = (score / quizData.length)*100;

  return (
    <div className="result-container">
      <h2>YOUR RESULT</h2>
      <h2 className="percent">{scorePercent}%</h2>
      <p className="score">You got {score} out of {quizData.length} correct</p>
      {quizData.map((question, index) => (
        <div key={index} className="result-text-container">
          <h3>{question.question}</h3>
          <span>Your answer: {selectedOptions[question.question]}</span>
          <br/>
          <span className="answer">Correct answer: {question.answer}</span>
        </div>
      ))}
      <button onClick={() => navigate('/start')}>Back</button>
    </div>
  );
};

export default Result;