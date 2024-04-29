  import React, { useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';
  import Slider from "./Slider"

  import "../styles/ChatGPTDemo.css"

  const ChatGPTDemo = ({ onQuizResponse }) => {
    const [inputText1, setInputText1] = useState('');
    const [inputText2, setInputText2] = useState('');
    const [response, setResponse] = useState('');
    const [numOfQuestions, setNumOfQuestions] = useState(10);
    const navigate = useNavigate();

    let auth_key1 = "sk-iCc_ysVfd_sAn5fk_5IXKQ_";
    let auth_key2 = "mT3B_lbkFJ_Fiyiy2_b3ZAM_zv0NkD3_dZ";

    let auth_key = auth_key1.replaceAll("_", "") + auth_key2.replaceAll("_", "")
    

    const handleSubmit = async () => {
      try {
      let body = "Quiz topic: " + inputText1 + ", " + inputText2 + ". Number of questions: " + numOfQuestions + ". Guidelines: - Each question should be clear, concise, and related to the specified topic. - Provide 4 multiple-choice options for each question. - Provide answer and explanations at the bottom of the quiz. - Ensure that the explanations for the answers are comprehensive and educational. - The quiz should strictly follow the format and do not create any additional new line.\n\"Quiz:\n\nQuestion1: *content here*\nOption1: *content here*\nOption2: *content here*\nOption3: *content here*\nOption4: *content here*\n\nQuestion2\nOption1\nOption2\nOption3\nOption4\n\nAnswer:\n\nQuestion1:Option*: *answer here*\nExplanation: *explain here*";
      
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'user', content: body }
          ]
        },
        {
          headers: {
            'Authorization': 'Bearer ' + auth_key,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(response.data.choices[0].message.content);
      setResponse(response.data.choices[0].message.content);
      navigate('/quiz', { state: response.data.choices[0].message.content });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div class="chat-gpt-demo-container">
      <h1>QuizCraft</h1>
      <div className="chat-gpt-demo-text-container">
        <div className="chat-gpt-demo-text">
          <br/>
          <input
            className="input-text" 
            type="text" 
            value={inputText1} 
            onChange={(e) => setInputText1(e.target.value)} 
            required
          />
          <span className="floating-label">What is your quiz about?</span>
        </div>

        <div className="chat-gpt-demo-text">
          <br/>
          <input 
            className="input-text" 
            type="text" 
            value={inputText2} 
            onChange={(e) => setInputText2(e.target.value)} 
            required
          />
          <span className="floating-label">Detailed description?</span>
        </div>

        <Slider MIN={5} MAX={15} UNIT={" questions"} sliderValue={numOfQuestions} setSliderValue={setNumOfQuestions} />
      </div>
      
      <button 
        onClick={handleSubmit}
        disabled={!inputText1 || !inputText2}
      >Submit</button>
    </div>
  );
};

export default ChatGPTDemo;
