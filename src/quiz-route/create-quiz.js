import { quizzes } from "./index.js";
import { v4 as uuidv4 } from 'uuid';

export const createQuiz = (req, res) => {
    const { title, questions } = req.body;

    if (!title || !questions || !Array.isArray(questions) || questions.length === 0) {
        console.error(`Invalid Data ${JSON.stringify({ title, questions })}, So returning 400`)
        return res.status(400).json({ message: 'Invalid quiz data' });
    }

    try {
        const quizId = uuidv4(); // generate a Unique ID
        quizzes[quizId] = { // create a new quiz with Key as quizId
            id: quizId,
            title,
            questions: questions.map((q, index) => ({
                id: uuidv4(),
                text: q.text,
                options: q.options,
                correct_option: q.correct_option
            }))
        };

        res.status(201).json({ message: 'Quiz created', quizId });
    } catch (error) {
        console.error('ERROR: create quiz failed, ', JSON.stringify(error));
        return res.status(500).json({ message: `Something went Wrong ${JSON.stringify(error)}` });
    }

};