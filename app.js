var express = require('express');
var app = express();
var server = app.list(3000, function() {
  console.log('Listening to port', server.address().port);
});