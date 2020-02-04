// import files and packages up here
const morgan = require('morgan')
const express = require('express')
const places = require('./data')

data = (req, res) => {
    res.send(places);
}

success = (req, res) => {
    res.send('Its Working');
}

// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('combined'))
// finally export the express application
app.use('/', express.static(__dirname), morgan('dev'));
app.get('/data', data);
app.get('/', success);

module.exports = app;
