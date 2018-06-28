var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var $ = require("jquery");

var user ="";


app.get('/', function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf8');  
    res.sendFile(__dirname + '/index.html'); 
});
app.post('/user', function(req, res){
  user = req.body.txtUsu;
  res.sendFile(__dirname+'/Chat.html');
});


io.on('connection',function(socket){
  socket.emit('wlc',user);
  socket.on('chat message', function (msg,userio) {
    io.emit('chat message', userio+' -> '+msg);
    //socket.broadcast.emit(msg);
    console.log(userio+' -> '+msg);
  });
});
http.listen(3000, function () {
  console.log('Estou no server :::: 3000');
});



