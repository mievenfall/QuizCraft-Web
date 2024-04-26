// Options.js
import React from 'react';

const Options = ({ options, handleOptionSelect }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleOptionSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options; 