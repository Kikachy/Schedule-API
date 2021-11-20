// Importera
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');

const cors = require('cors');

// Läs in Schemana
//var Student = require("./models/student.js");


// Skapa instans av express
const app = express();

// Port
const port = process.env.PORT || 3000;

require("./routes/webservice")(app);
require("./routes/canvas")(app);

// Skapa statisk sökväg
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  next();
});
//app.use(https);
/**
 * Middleware
 */
/*
 app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  next();
});*/

// Starta servern
app.listen(port, function() {
    console.log("Server running on port " + port);
  });