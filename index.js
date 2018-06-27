var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('alguem se conectou')

  //emit message to all front-end clients
  io.emit('wlc', 'Bem vindo');
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg);
    //socket.broadcast.emit(msg);
    //console.log(msg);
  });
});
http.listen(3000, function () {
  console.log('listening on *:3000');
});



