import express from 'express';
import { quizRoute } from './src/quiz-route/index.js';
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    // This is  a middleware function can be used for Authentication , 
    // Skipping the actual authentication, due to lack of time

    console.log('Middleware function for Authentication');

    // Authentication Logic can be added here , adding dummy example
    const token = req.headers.authorization;
    console.info("AUTH token: ", token);
    if (token !== "JWT-token") {  // Verify JWT Token login can be added here
        console.error(`UNAUTHORISED , Invalid Token: ${token}, so returning 403`)
        return res.status(401).send({ message: "UNAUTHORISED", status: "ERROR" })
    }
    next();
})

app.use('/v1', quizRoute);
// Define a simple route
app.get('/', (req, res) => {
    console.log
    res.json({ message: 'Hello! quiz Express server is running.', status: 'OK' });
});


// Define a port
const port = process.env.PORT || 8081;
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // for local host server only
});

