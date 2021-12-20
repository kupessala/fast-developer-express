'use strict'
/**
 * Author:Rodrino Adolf Kupessala <rkupessala@gmail.com>
 * Version:1.0.0
 * Description: Esta classe permite checar permissões baseadas em url dos usuários,
 * em cada rota deve consultar a bas de dados.
 * Exemplos:
 */
 const dirStruture=[
    {   bin:'bin',
        model: 'Models',
        view: 'Views',
        controller: 'Controller',
        database: 'lib',
        routes: 'routes',
        public:'public'
 }
]
const server=`
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var flash = require('express-flash');
var session = require('express-session');
var mysql = require('mysql');
var connection  = require('./lib/db');

var indexRouter = require('./routes/index');
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
    cookie: { maxAge: 60000 },
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}))

app.use(flash());

app.use('/', indexRouter);
 
 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
`;
const packages=`
{
    "name": "FGP",
    "version": "1.0.0",
    "private": true,
    "scripts": {
      "start": "node ./bin/www"
    },
    "dependencies": {
      "cookie-parser": "~1.4.4",
      "debug": "~2.6.9",
      "ejs": "~2.6.1",
      "express": "~4.16.1",
      "express-flash": "0.0.2",
      "express-session": "^1.16.2",
      "http-errors": "~1.6.3",
      "method-override": "^3.0.0",
      "morgan": "~1.9.1",
      "mysql": "^2.17.1"
    }
  }
`
const www=`


/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('crud:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
`;
const db=`var mysql = require('mysql');
var connection = mysql.createConnection({
	host:'localhost',
	user:'USERNAME_HERE',
	password:'PASSWORD_HERE',
	database:'DATABASE_NAME_HERE'
});
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});

module.exports = connection;`

const indexRoute=`var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fast Generate Projects' });
});

module.exports = router;
`
const make=`const fs = require('fs'); 
const generate=require('./builder/Generator')
var myArgs=process.argv.slice(2)
 
    let view = String(myArgs.find((value) => /^make:view=(.*)/.test(value))).split(/=/)[1];
   
    let model = String(myArgs.find(value => /^make:model=(.*)$/.test(value))).split(/=/)[1];
    let router = String(myArgs.find(value => /^make:router=(.*)$/.test(value))).split(/=/)[1];
    let controller = String(myArgs.find(value => /^make:folder=(.*)$/.test(value))).split(/=/)[1];
   
  
    if (model !== '' | model != null) {
         console.log('Ainda nao disponivel')
    }
    

 
    `
module.exports={
    dirStruture,
    server,
    packages,
    www,
    db,
    indexRoute,
  make}

 


