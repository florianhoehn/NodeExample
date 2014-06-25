var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('0.0.0.0', 8080);

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {
    reply('hello world');
  }
});
server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: 'index.html'
  }
});

// Start the server
server.start();