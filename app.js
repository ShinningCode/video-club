/* global __dirname */

//app.js
//Last update 03/03/23
const createError = require('http-errors'); //Change var to const
const express = require('express'); //Change var to const
const path = require('path'); //Change var to const
const cookieParser = require('cookie-parser'); //Change var to const
const logger = require('morgan');//Change var to const

const indexRouter = require('./routes/index');//Change var to const
const usersRouter = require('./routes/users');//Change var to const
const genresRouter = require('./routes/genres');
//03/03/23 ☻
const directorsRouter = require('./routes/directors');
//08/03/23
const membersRouter = require('./routes/members');

const moviesRouter = require('./routes/movies');
const actorsRouter = require('./routes/actors');
const copyRouter = require('./routes/copies');
const bookRouter = require('./routes/bookings');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/directors', directorsRouter);
app.use('/genres', genresRouter);
app.use('/members', membersRouter);
// catch 404 and forward to error handler
app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);
//15/03/23
app.use("/copies", copyRouter);
app.use('/bookings', bookRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
