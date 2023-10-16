const path = require('path');
const filePath = path.resolve(__dirname, 'test.json');
const write = require('./Modules/write');
const read = require('./Modules/read');

const people = [
    {name: 'John'},
    {name: 'Maria'},
    {name: 'Leo'},
    {name: 'Timoteo'}
];

const json = JSON.stringify(people, '', 2);
write(filePath, json);

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    data.forEach(val => console.log(val.name))
}

readFile(filePath);