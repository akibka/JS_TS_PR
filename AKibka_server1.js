const http = require('http');
// Creating the server 
const server = http.createServer((request, response) => {
// Set the response header content type
response.setHeader('Content-Type', 'text/plain');
// Routing logic 
if (request.url === '/') {
response.statusCode = 200;
response.end('Welcome to the new Server!');
} else if (request.url === '/about') {
response.statusCode = 200;
response.end('This is a simple http Node.js server');
} else if (request.url === '/contact') {
response.statusCode = 200;
response.end('Contact us at contact@newserver.com');
} else {
response.statusCode = 404;
response.end('Page not found!');
} 
});
// Server listens on port 5000 
server.listen(5000, '127.0.0.1', () => { 
console.log('Server is running at http://127.0.0.1:5000/');
});