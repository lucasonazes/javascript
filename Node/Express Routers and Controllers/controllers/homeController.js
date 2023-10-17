exports.home = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>
    `);
}

exports.post = (req, res) => {
    res.send(`Congratulations!`);
}