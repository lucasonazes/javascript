const express = require('express');
const app = express();
const routes = require('./routes.js');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
    console.log('Acess http://localhost:3000');
    console.log('Running server on port 3000');
});