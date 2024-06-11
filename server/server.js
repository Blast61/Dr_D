import express from 'express';
const app = express();
const PORT = 3000

import path from 'path';
import cors from 'cors'
import cookieParser from 'cookie-parser';

//Parse the incoming req body
app.use(express.json());
//Cookie Parser
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

//serve static file
app.use(express.static(path.join(__dirname, 'src')))



//404 Handler
app.use((req, res, next) =>{
    res.status(404).send(`This is not the page you're looking for...`);
});

//Global Error Handler
app.use((err, req, res, next) => {
    //Default error
    const def = {
        message: `Caught unknown err`,
        status: 500,
        log: { error: `Check server logs for more details`},

    };
    const errorObj = Object.assign(def, err);
    return res.status(errorObj.status).json({ log: errorObj.log });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
