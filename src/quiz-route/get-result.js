import { userResults } from "./index.js";

export const getResult = (req, res) => {
    try {
        const { quizId } = req.params; // get quizId from prams
        const { userId } = req.query; // get userId from query params

        // if no user is found or no quiz found with given userID and quizId, then return 404
        if (!userResults[userId] || !userResults[userId][quizId]) {
            console.Error(`Result not found with userId : ${userId} and quizId: ${quizId}, returning 404`)
            return res.status(404).json({ message: 'No results found for this quiz' });
        }

        res.json(userResults[userId][quizId]);
    } catch (error) {
        console.error('ERROR: get getResult failed, ', JSON.stringify(error));
        return res.status(500).json({ message: `Something went Wrong ${JSON.stringify(error)}` });
    }
}