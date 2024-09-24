import express from 'express';
import { createQuiz } from './create-quiz.js';
import { getQuiz } from './get-quiz.js';
import { submitAnswer } from './submit-answer.js';
import { getResult } from './get-result.js';

export const quizzes = {}; // In-memory store for quizzes
export const userResults = {}; // In-memory store for user answers/results

export const quizRoute = express.Router();

// Create a new quiz
quizRoute.post('/create-quiz', createQuiz);

// // Get a quiz by ID
quizRoute.get('/get-quiz/:id', getQuiz);

// // Submit an answer to a question
quizRoute.post('/submit-answer', submitAnswer);

// // Get user's results
quizRoute.get('/get-results/:quizId', getResult);

