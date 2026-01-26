const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');
const morgan =  require('morgan');

const app = express();
app.use(morgan('combine'));
app.use(bodyParse.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Tab Tracker!');
});

app.get('/status', (req, res) => {
    res.send({
        message: 'hello world!'
    })
});

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email} Your user was registered!`
    });
});

app.listen(process.env.PORT || 8081);