const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`You send me: ${req.body.name}`);
})

app.get('/tests/:userId?', (req, res) => {
    res.send(req.params.userId);
});

app.listen(3000, () => {
    console.log('Acess http://localhost:3000');
    console.log('Running server on port 3000');
});