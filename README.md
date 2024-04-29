# QuizCraft

<img src='./Screenshot 2024-04-29 021654.png' title='Chosen Screenshot' width='' alt='Chosen Screenshot' />

## What is the use of this App

This Project is a Simple ReactJS Project which demonstrates the following
1. Applying Prompt Engineering in order to get detailed answer from one of Generative AI models using API
2. Processing output from AI model into desired format
3. Handling questions/options/answers and calculating result for user

## Live Application URL

### https://dev.d3idm7jsuh35k4.amplifyapp.com
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

### Components

1. **ChatGPTDemo** Component : This Component displays a input fields. This Component gets the data from inputs then makes API calls

2. **LoadingScreen** Component : This Component displays the loading spinner. This Component is used while waiting for response from *ChatGPTDemo* Component

3. **Question** Component : This Component displays the question. This Component is a child component of *QuizContainer* Component

4. **QuizContainer** Component : This Component displays the list questions. This Component handles user's option for every question

5. **Result** Component : This Component displays the result of the quiz. This Component calculates user's score and displays correct answers

6. **Slider** Component : This Component displays slider. This Component is a child component of *ChatGPTDemo* Component

7. **processQuizData** Component : This Component processes output from AI model into desired format:
```
{
  'question': <QUIZ_QUESTION>,
  'options': [QUIZ_OPTION_1, QUIZ_OPTION_2, QUIZ_OPTION_3, QUIZ_OPTION_4],
  'answer': <QUIZ_ANSWER>
}
```

### HTTP client

**axios** library is used to make HTTP Calls

### URL

- `/` - ties to *ChatGPTDemo* Component
- `/quiz` - ties to *QuizContainer* Component
- `/result` - ties to *Result* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS
