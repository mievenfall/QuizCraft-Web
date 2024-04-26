// Question.js
import React from 'react';
import Options from './Options';

const Question = ({ question, handleOptionSelect }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <Options
        options={question.options}
        handleOptionSelect={handleOptionSelect}
      />
    </div>
  );
};

export default Question;