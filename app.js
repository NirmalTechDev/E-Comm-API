var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');

var userRouter = require('./routes/user');
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/product'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// index router
app.use('/admin', indexRouter);
app.use('/', authRouter);

// category router
app.use('/admin/addcategory',categoryRouter);

// product router
app.use('/admin/addproduct',productRouter);

// user router
app.use('/admin/adduser',userRouter)

// view category
app.use('/admin/categorytable',categoryRouter);

//View product
app.use('/admin/producttable',productRouter)

// user router
app.use('/admin/usertable',userRouter)

// delete user
app.use('/admin/remove',userRouter)

// update user
app.use('/admin/update',userRouter)

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
