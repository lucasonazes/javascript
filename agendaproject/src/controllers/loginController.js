const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = (req, res) => {
    const login = new Login(login.body);
    res.send(req.body);
}