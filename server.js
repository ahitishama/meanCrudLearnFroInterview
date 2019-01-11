var express = require('express');
//var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./backend/config/database');
//send-email
path = require('path'),

//var page = require('./routes/pages');
//Connect to db
mongoose.connect(config.database, { useNewUrlParser: true });
//mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');

});

//Init app
var app = express();

//prettyfy JSON
app.set('json spaces',40);



//Body parser middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
//Set routes

// var users =  require('./backend/controller/user.js');
var login =  require('./backend/controller/login.js');
var product =  require('./backend/controller/product.js');


// app.use('/users',users);
app.use('/login',login);
app.use('/product',product);


//Start the server
var port = 9090;
app.listen(port,function(){
    console.log('Server running at ' +port)
});
