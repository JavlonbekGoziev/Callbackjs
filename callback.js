
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log("It's callback, first step");

    setTimeout(function() {
        console.log('First step ');
    }, 3000);

    setTimeout(function() {
        console.log('Second step ');
    }, 5000);

    setTimeout(function() {
        console.log('Third step ');
    }, 7000);

    res.send('Hello world');
});

app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});
