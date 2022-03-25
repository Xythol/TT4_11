var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var registerRouter = require('./routes/register');
// var shoppingRouter = require('./routes/shopping');
var onboardingRouter = require('./routes/services/onboarding_service');
var loanhistoryRouter = require('./routes/services/loanhistory_service');



var loanHistoryRouter = require('./routes/services/loanhistory');
var balanceRouter = require('./routes/services/balance');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/register', registerRouter);
// app.use('/shopping', shoppingRouter);
app.use('/onboarding', onboardingRouter);
app.use('/loanhistory', loanhistoryRouter);

app.use('/balance', balanceRouter);
app.use('/loanhistory', loanHistoryRouter);

// catch 404 and forward to error handler
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
