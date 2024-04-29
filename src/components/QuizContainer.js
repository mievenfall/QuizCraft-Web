import React, { useState, useEffect } from 'react';
import Question from './Question';
import processQuizData from './processQuizData';
import { useLocation, useNavigate } from 'react-router-dom';

import '../styles/QuizContainer.css';

const QuizContainer = () => {
  const [quizData, setQuizData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      const processedQuizData = processQuizData(state);
      setQuizData(processedQuizData);
    }
  }, [state]);

  const handleOptionSelect = (question, selectedOption) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [question]: selectedOption,
    }));
  };

  const handleSubmit = () => {
    navigate('/result', { state: { quizData, selectedOptions } });
  };

  return (
    <div className="quiz-container-container">
      <div className="quiz-container-text-container">
        {quizData.map((question, index) => (
          <Question
            key={index}
            question={question}
            selectedOption={selectedOptions[question.question]}
            handleOptionSelect={handleOptionSelect}
          />
        ))}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    
  );
};

export default QuizContainer;