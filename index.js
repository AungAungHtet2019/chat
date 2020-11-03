//const { dirname } = require('path');

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


const bodyParser = require('body-parser');


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

  app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
  });


/* io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
}); */

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });

  socket.on('chat message', (msg) => {
    console.log('chat message', msg);
    io.emit('chat message', msg);
  });

  socket.broadcast.emit('hi');

  io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

});




  http.listen(port, function(){
    console.log('listening on *:' + port);
  });


// Require message routes
const messageRoutes = require('./src/routes/message.route')
// using as middleware
app.use('/api/v1/messages', messageRoutes)

// Require user routes
const userRoutes = require('./src/routes/login_route')
// using as middleware
app.use('/api/v1/user', userRoutes)


// listen for requests
/* app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
}); */