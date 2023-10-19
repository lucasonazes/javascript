exports.home = (req, res) => {
    res.render('index', {
        title: 'This will be the title of the page',
        numbers: [0,1,2,3,4,5,6,7,8,9]
    });
    return;
};

exports.post = (req, res) => {
    res.send(`Congratulations!`);
    return;
};