import { quizzes } from "./index.js";

export const getQuiz = (req, res) => {
    try {
        const quiz = quizzes[req.params.id]; // Checking for quiz using quizId
        if (!quiz) {
            console.error(`No quize found with ${req.params.id}, So returning 404`)
            return res.status(404).json({ message: 'Quiz not found' });
        }

        const quizWithoutAnswers = {
            id: quiz.id,
            title: quiz.title,
            questions: quiz.questions.map(q => ({
                id: q.id,
                text: q.text,
                options: q.options
            }))
        };

        res.json(quizWithoutAnswers);
    } catch (error) {
        console.error('ERROR: get quiz failed, ', JSON.stringify(error));
        return res.status(500).json({ message: `Something went Wrong ${JSON.stringify(error)}` });
    }
}