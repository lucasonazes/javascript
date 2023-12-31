const express = require('express');
const route = express.Router();

// Importing controllers
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contactController = require('./src/controllers/contactController');

const { loginRequired } = require('./src/middlewares/middleware');

// Home´s routes
route.get('/', homeController.index);

// Login routes
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/sig-in', loginController.sigIn);
route.get('/login/logout', loginController.logout);

// Contact routes
route.get('/contact/index', loginRequired, contactController.index);
route.post('/contact/register', loginRequired, contactController.register);
route.get('/contact/index/:id', loginRequired, contactController.editIndex);
route.post('/contact/edit/:id', loginRequired, contactController.edit);
route.get('/contact/delete/:id', loginRequired, contactController.delete);

// Exporting routes
module.exports = route;