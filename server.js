const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const { createServer } = require('http');
const path = require('path');
const { Server } = require('socket.io');
const hbs = exphbs.create();
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const PORT = process.env.PORT || 3001;

// added by chris

// const userRouter = require('./routes/users')

// app.use('/users', userRouter)

// added by chris

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
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
sequelize.sync({force: false}).then(()=>{
  httpServer.listen(PORT, () =>
  console.log('Now listening on http://localhost:' + PORT)
);

})
