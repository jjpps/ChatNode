var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var bo = require('bootstrap');
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});


http.listen(3000, function () {
  console.log('estou no server :3000');
});



