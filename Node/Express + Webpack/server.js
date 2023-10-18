// DotEnv
require('dotenv').config();

// Express Framework
const express = require('express');
const app = express();

// Conecting routes 
const routes = require('./routes');

// Setting the path to the directory
const path = require('path');

// Middlesware
const { globalMiddleware } = require('./src/middlewares/middleware');

// Conecting to the Database
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('Ready!');
    })
    .catch(e => console.log(e));

// Express Sessions and Flash Messages
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// Manipulate req.body
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

// Session settings
const sessionOptions = session({
    secret: 'This a secret text()',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // (Seven days)
        httpOnly: true
    }
});
// Define session options
app.use(sessionOptions);
// Using Flash
app.use(flash());

// View index.env
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// My Middlewares
app.use(globalMiddleware);

// Using routes
app.use(routes);

// Conecting server port
app.on('Ready!', () => {
    app.listen(3000, () => {
        console.log('Acess http://localhost:3000');
        console.log('Running server on port 3000');
    });
}) 