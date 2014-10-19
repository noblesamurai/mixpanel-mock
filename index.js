var express = require('express');
var morgan = require('morgan');

var app = express();


app.get('*', function (req, res) {
  console.log(new Buffer(req.query.data, 'base64').toString());
  res.send('1');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
