const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();
const userRouter = require('./server/routes/userRoutes');

//log request in console using morgan middleware
app.use(morgan('dev'));

//parse request to body parser using bodyparser middleware
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set('view engine', 'ejs');

//load assets middleware
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

//Load Router
app.use('/', userRouter);

module.exports = app;
