const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const { createServer } = require('http');
const path = require('path');
const { server } = require('socket.io');
const hbs = exphbs.create({});

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

io.on('connection', function (socket) {
  console.log('A user connected');

  socket.on('new-user', function (...args) {
    socket.broadcast.emit('new-user', args[0]);
    console.log('new User!');
  });

  socket.on('new-message', function (...args) {
    socket.broadcast.emit('new-message', args);
    console.log('new User!');
  });

  socket.on('disconnect', function () {
    console.log('A user disconnected');
  });
});

httpServer.listen(PORT, () =>
  console.log('Now listening on http://localhost:' + PORT)
);
