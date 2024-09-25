# Quiz API

This is a simple API for managing and executing quizzes, built using Node.js and Express. It allows users to create quizzes, answer questions, and receive feedback on their performance.

## Features

- **Create Quiz**: Add a new quiz with multiple questions.
- **Get Quiz**: Fetch a quiz without revealing the correct answers.
- **Submit Answer**: Submit an answer to a quiz question and get immediate feedback.
- **Get Results**: Retrieve the user's score and summary of their answers.

## Requirements

- Node.js (v14.x or later)
- npm (v6.x or later)

## Getting Started

Follow the instructions below to set up and run the service locally.

### 1. Clone the Repository

- git clone https://github.com/shakti7665/quiz.git
- cd QUIZ

### 2. Run the following command to install the required packages:

- npm install

### 3. Once the dependencies are installed, you can start the server with:

- npm start

# Create Quiz: 

- POST: http://localhost:8081/v1/create-quiz

- Header: 
Authorization: ca83ee93-a179-4ef6-b9ad-681da35e2609   <!-- Use "ca83ee93-a179-4ef6-b9ad-681da35e2609" as a token value -->
- Request body :
{
  "title": "Sample Quiz",
  "questions": [
    {
      "text": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "correct_option": 2
    },
    {
      "text": "What is the capital of India?",
      "options": ["Delhi", "Goa", "Kerla", "Rajasthan"],
      "correct_option": 0
    }
  ]
}

# Get Quiz: 

- GET: http://localhost:8081/v1/get-quiz/:quizId  <!-- Use the quizId from the response of Create Quiz -->

- Header: 
Authorization: ca83ee93-a179-4ef6-b9ad-681da35e2609   <!-- Use "ca83ee93-a179-4ef6-b9ad-681da35e2609" as a token value -->

# Submit Answer: 

- POST: http://localhost:8081/v1/submit-answer

- Header: 
Authorization: ca83ee93-a179-4ef6-b9ad-681da35e2609   <!-- Use "ca83ee93-a179-4ef6-b9ad-681da35e2609" as a token value -->

- Request Body:
{
  "quizId": "13657b6e-a26a-4e4c-9be1-2f9b017ef624", <!-- Use the quizId from the response of Get Quiz -->
  "questionId": "37369757-3ce3-4c85-b520-d0661504a8ce", <!-- Use the questionId from the response of get Quiz -->
  "selectedOption": 3,
  "userId": "user-123"
}


# Get Result: 

- GET: http://localhost:8081/v1/get-results/:quizId  <!-- Use the quizId from the response of Create Quiz -->

- Header: 
Authorization: ca83ee93-a179-4ef6-b9ad-681da35e2609   <!-- Use "ca83ee93-a179-4ef6-b9ad-681da35e2609" as a token value -->

