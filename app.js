//requires
var express = require('express');
var cookieParser = require('cookie-parser');
const cors = require('cors');

var app = express();


//configurando express
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
