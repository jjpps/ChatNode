var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var nomeUser = "";
var $ = require("jquery");
app.get('/', function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf8');
  if (nomeUser == "") {
    res.sendFile(__dirname + '/index.html');
  } else { 
    res.sendFile(__dirname + '/Chat.html');
  }

});

io.on('connection', function (socket) {
  socket.on('user', function (data) {
    if (data != null) {
      nomeUser = data;
      console.log(nomeUser);
    } else {
      console.log('vazio');
    }
  });
});

http.listen(3000, function () {
  console.log('estou no server :3000');
});



