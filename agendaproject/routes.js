const express = require('express');
const route = express.Router();

// Importing controllers
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Home´s routes
route.get('/', homeController.index);

// Login routes
route.get('/login/index', loginController.index);


// Exporting routes
module.exports = route;