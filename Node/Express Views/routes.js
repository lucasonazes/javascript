const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

// Home´s routes
route.get('/', homeController.home);
route.post('/', homeController.post);

// Contacts routes
route.get('/contact', contactController.home);

module.exports = route;
