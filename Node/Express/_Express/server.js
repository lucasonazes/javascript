const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Name: <input type="text" name="name">
    <button>Send</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Form received');
})

app.listen(3000, () => {
    console.log('Acess http://localhost:3000');
    console.log('Running server on port 3000');
});