// import files and packages up here
var morgan = require('morgan')
var express = require('express')
var data = require('data')

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan('combined'))
// finally export the express application
app.get('/', function(req, res){
    res.send('data')
})
module.exports = app;
