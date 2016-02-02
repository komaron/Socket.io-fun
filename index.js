// Express initializes app to be a function handler that you can supply to an HTTP server
var app = require('express')();
var http = require('http').Server(app);

// We define a route handler / that gets called when we hit our website home.
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var io = require('socket.io')(http);
io.on('connection', function(socket){
  console.log('User connected!');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


// Specify a port for our HTTP server to listen on
http.listen(3000, function(){
  console.log('listening on *:3000');
});
