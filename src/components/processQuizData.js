import ChatGPTDemo from "./ChatGPTDemo";

const processQuizData = (quizString) => {
    const quizzes = [];
    const questions = [];
    const options = [];
    const answers = [];
    const explanations = [];
  
    let currentQuestion = -1;
    let currentAnswer = -1;
    let isAnswerSection = false;
  
    const lines = quizString.trim().split('\n');
  
    for (const line of lines) {
      if (line.startsWith('Quiz:')) {
        isAnswerSection = false;
      }
  
      if (line.startsWith('Question')) {
        currentQuestion++;
        const question = line.substring(line.indexOf(':') + 2).trim();
        questions.push(question);
        options.push([]);
        isAnswerSection = false;
      } else if (line.startsWith('Option')) {
        if (currentQuestion >= 0 && currentQuestion < options.length) {
          const option = line.substring(line.indexOf(':') + 2).trim();
          options[currentQuestion].push(option);
        }
      } else if (line.startsWith('Answer:')) {
        isAnswerSection = true;
        break;
      }
    }
  
    while (true){
        if (lines[0].startsWith('Answer:')) {
            break;
        }
        lines.shift();
    }

    for (const line of lines) {
      if (line.startsWith('Question')) {
        currentAnswer++;
        if (currentAnswer >= 0 && currentAnswer < questions.length) {
          const answer = line.substring(line.indexOf(':') + 2).trim();
          answers.push(answer.substring(line.indexOf(':')).trim());
        }
      } else if (line.startsWith('Expla')) {
        explanations.push(line);
      }
    }
  
    for (let i = 0; i < questions.length; i++) {
      const answer = i < answers.length ? answers[i].trim() : '';
      const quiz = {
        question: questions[i],
        options: options[i],
        answer,
        explanation: explanations[i] || ''
      };
      quizzes.push(quiz);
    }
  
    return quizzes;
  };

export default processQuizData; 