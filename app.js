var express = require("express");
var logfmt = require("logfmt");
var home = require('./mockResponse.js');

var url = require('url');

var app = express();

app.use(logfmt.requestLogger());
app.use(express.bodyParser());

app.get('/', home.result1);


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});