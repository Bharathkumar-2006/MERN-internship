const express = require('express');
const bodyParser = require('body-parser'); 

const app = express(); 
const PORT = 3000; 

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Express Backend!');
});
app.get('/data', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Hello BK!, your age is 19!` });
});

app.use((req, res) => {
    res.status(404).send('Route not found!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
