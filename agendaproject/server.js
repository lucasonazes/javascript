// DotEnv - So you don´t put users and passwords on repositories
require('dotenv').config();
// Express Framework
const express = require('express');
const app = express();
// Conecting routes 
const routes = require('./routes');
// Setting the path to the directory
const path = require('path');
// Helmet - Protection
const helmet = require('helmet');
// Csrf Tokens
const csurf = require('csurf');
// Middlewares
const { globalMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

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

// To post forms into our aplication
app.use(express.urlencoded({ extended: true }));
// To post json into our aplication
app.use(express.json());

// Static files (images, css, javascript)
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

// Csrf Error
app.use(csurf());
// My Middlewares
app.use(globalMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// Using routes
app.use(routes);
// Using helmet
//app.use(helmet());

// Conecting server port
app.on('Ready!', () => {
    app.listen(3000, () => {
        console.log('Acess http://localhost:3000');
        console.log('Running server on port 3000');
    });
})