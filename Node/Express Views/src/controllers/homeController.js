exports.home = (req, res) => {
    res.render('index');
};

exports.post = (req, res) => {
    res.send(`Congratulations!`);
};