var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyparser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const port = 3000
var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//pages

app.get('/', (req, res) => {
  res.render('index')
});

//main pages of nav bar
app.get('/cities', (req, res) => {
  res.render('cities')
});
//
app.get('/Tourism activities', (req, res) => {
  res.render('Tourism activities')
});
//
app.get('/Egyptian-food', (req, res) => {
  res.render('Egyptian-food')
});
//app
app.get('/Night-spots', (req, res) => {
  res.render('Night-spots')
});
//app
app.get('/Mobility&transportation', (req, res) => {
  res.render('Mobility&transportation')
});
//app
app.get('/Choose-your-guide', (req, res) => {
  res.render('Choose-your-guide')
});


//main pages of nav bar
// cities 
app.get('/cities/cairo', (req, res) => {
  res.render('cities/cairo')
});
//
app.get('/cities/NEWBAA&RAS-SHEtan', (req, res) => {
  res.render('cities/NEWBAA&RAS-SHEtan')
});
//

app.get('/cities/SIWA', (req, res) => {
  res.render('cities/SIWA')
});
//
app.get('/cities/TABA&AREISH', (req, res) => {
  res.render('cities/TABA&AREISH')
});
//
app.get('/cities/MARSA-ALAM', (req, res) => {
  res.render('cities/MARSA-ALAM')
});
//
app.get('/cities/HURGHADA & EL-GOUNA', (req, res) => {
  res.render('cities/HURGHADA & EL-GOUNA')
});
//
app.get('/cities/ASWAN', (req, res) => {
  res.render('cities/ASWAN')
});
//
app.get('/cities/LUXOR', (req, res) => {
  res.render('cities/LUXOR')
});
//
app.get('/cities/ALEXANDRIA', (req, res) => {
  res.render('cities/ALEXANDRIA')
});
// cities end
//pages end 

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
