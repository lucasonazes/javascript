require('dotenv').config();

// Express Framework
const express = require('express');
const app = express();

// Conecting routes 
const routes = require('./routes');

// Setting the path to the directory
const path = require('path');

// Conecting on the Database
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Ready!');
    })
    .catch(e => console.log(e));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

// Conecting server port
app.on('Ready!', () => {
    app.listen(3000, () => {
        console.log('Acess http://localhost:3000');
        console.log('Running server on port 3000');
    });
}) 