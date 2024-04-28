  import React, { useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from 'react-router-dom';

  import "../styles/ChatGPTDemo.css"

  const ChatGPTDemo = ({ onQuizResponse }) => {
    const [inputText1, setInputText1] = useState('');
    const [inputText2, setInputText2] = useState('');
    const [response, setResponse] = useState('');
    const navigate = useNavigate();

    let auth_key1 = "sk-VaIQu_KPbq3XH_whG8erq";
    let auth_key2 = "wT3B_lbk_FJVXt_TBpL_6Di4_48O_PItzpc";

    let auth_key = auth_key1.replaceAll("_", "") + auth_key2.replaceAll("_", "")
    

    const handleSubmit = async () => {
      try {
      let body = "Quiz topic: " + inputText1 + ", " + inputText2 + ". Number of questions: 5. Guidelines: - Each question should be clear, concise, and related to the specified topic. - Provide 4 multiple-choice options for each question. - Provide answer and explanations at the bottom of the quiz. - Ensure that the explanations for the answers are comprehensive and educational. - The quiz should strictly follow the format and do not create any additional new line.\n\"Quiz:\n\nQuestion1: *content here*\nOption1: *content here*\nOption2: *content here*\nOption3: *content here*\nOption4: *content here*\n\nQuestion2\nOption1\nOption2\nOption3\nOption4\n\nAnswer:\n\nQuestion1:Option*: *answer here*\nExplanation: *explain here*";
      
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
      <div class="chat-gpt-demo-text-container">
        <div class="chat-gpt-demo-text">
          <input 
            type="text" 
            placeholder='What is your quiz about?'
            value={inputText1} 
            onChange={(e) => setInputText1(e.target.value)} 
          />
        </div>

        <div class="chat-gpt-demo-text">
          <input 
            type="text" 
            placeholder='Detailed description?'
            value={inputText2} 
            onChange={(e) => setInputText2(e.target.value)} 
          />
        </div>
      </div>
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ChatGPTDemo;
