var express = require("express");
var bodyParser = require("body-parser");
var passport   = require('passport');
var session    = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var env = require('dotenv').load();


var PORT = process.env.PORT || 3000;
// Requiring our models for syncing
var db = require("./models");

var app = express();

//For Flash
app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 600000}}));
app.use(flash());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:false})); // session secret 
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error=req.flash('norec_msg')
  res.locals.user = req.user || null;
  next();
});

// Import routes and give the server access to them.

require("./routes/api-routes.js")(app);
var authRoute = require('./routes/auth-routes.js')(app,passport);

//load passport strategies
require('./config/passport/passport.js')(passport, db.Users);

// Syncing our sequelize models and then starting our Express app
// =============================================================
//db.sequelize.sync({force: true}).then(function () {
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
  });
});
