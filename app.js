var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/homepage');
var galleryRouter = require('./routes/gallery')
var fetchimgRouter = require('./routes/fetchimg')
var adminLoginRouter = require('./routes/admins')
var registrationRouter = require('./routes/registration')
var mailMessageRouter = require('./routes/sendMessageMail')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/events', galleryRouter);
app.use ('/fetch',fetchimgRouter)
app.use ('/admin',adminLoginRouter)
app.use ('/Registration',registrationRouter)
app.use ('/mail',mailMessageRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
