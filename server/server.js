const express = require('express');
const app = express();
const PORT = 3000
const cookieParser = require('cookie-parser');
const path = require('path');


app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded());

app.use(express.static('assets'))

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
