exports.home = (req, res) => {
    res.render('index');
    return;
};

exports.post = (req, res) => {
    res.send(`Congratulations!`);
    return;
};

