import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import QuizContainer from './components/QuizContainer';
import ChatGPTDemo from './components/ChatGPTDemo';
import Result from './components/Result';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes basename="/QuizCraft-Web">
        <Route path="/" element={<ChatGPTDemo />} />
        <Route path="/quiz" element={<QuizContainer />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;