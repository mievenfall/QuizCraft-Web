// Question.js
import React from 'react';

import "../styles/Question.css"

const Question = ({ question, handleOptionSelect }) => {
  return (
    <div className="question-container">
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              className="input-radio"
              type="radio"
              name={`question-${question.question}`}
              value={option}
              onChange={() => handleOptionSelect(question.question, option)}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question;