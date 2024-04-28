// Question.js
import React from 'react';

const Question = ({ question, handleOptionSelect }) => {
  return (
    <div>
      <h3>{question.question}</h3>
      {question.options.map((option, index) => (
        <div key={index}>
          <label>
            <input
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