import { quizzes, userResults } from "./index.js";

export const submitAnswer = (req, res) => {
    try {
        const { quizId, questionId, selectedOption, userId } = req.body;

        // Check if the quiz exists
        const quiz = quizzes[quizId];
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
        }

        // Check if the question exists within the quiz
        const question = quiz.questions.find(q => q.id === questionId);
        if (!question) {
            return res.status(404).json({ message: 'Question not found' });
        }

        // Initialize user results if it doesn't exist
        if (!userResults[userId]) {
            userResults[userId] = {};
        }

        // Initialize quiz results for the user if it doesn't exist
        if (!userResults[userId][quizId]) {
            userResults[userId][quizId] = {
                quiz_id: quizId,
                user_id: userId,
                score: 0,
                answers: []
            };
        }

        // Check if the user has already submitted an answer for this question
        const existingAnswer = userResults[userId][quizId].answers.find(a => a.question_id === questionId);
        if (existingAnswer) {
            return res.status(400).json({ message: 'Answer has already been submitted for this question. You cannot change your answer.' });
        }

        // Check if the selected option is correct
        const isCorrect = question.correct_option === selectedOption;
        const result = {
            question_id: questionId,
            selected_option: selectedOption,
            is_correct: isCorrect,
            correct_option: question.correct_option
        };
       
        // Add the result to the user's answers
        userResults[userId][quizId].answers.push(result);
        // Update the score if the answer is correct
        if (isCorrect) {
            userResults[userId][quizId].score += 1;
        }

        res.json({ message: 'Answer submitted successfully', correct: isCorrect, correctOption: isCorrect ? undefined : question.correct_option });
    } catch (error) {
        console.error('ERROR: submitAnswer failed, ', JSON.stringify(error));
        return res.status(500).json({ message: `Something went Wrong ${JSON.stringify(error)}` });
    }
}