var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var acc = 0;

app.use(express.static(__dirname + '/pub'));

app.get('/api', function(req, res) {
  res.send({'acc': acc});
});

io.on('connection', function(socket){
	console.log('yeah baby');
	acc++;
	socket.on('position', function (data) {
		//console.log(data);
	});
	socket.on('disconnect', function(){
		console.log('bye baby');
		acc--;
	});
});

http.listen(80, function(){
	console.log('listening on *:80');
});
