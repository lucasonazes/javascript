const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// http:mywebsite.com/ <- GET -> Send the page

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/contact', (req, res) => {
    res.send('Thank you for make contact with us!');
});

app.listen(3000, () => {
    console.log('Acess http://localhost:3000');
    console.log('Running server on port 3000');
});