const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    response.setHeader('Content-Type', 'text/plain');
    if (pathname === '/file' && query.name) {
        const filePath = `./${query.name}`;
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('File not found!');
            } else {
                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end(data);
            }
        });
    } else {
        response.writeHead (404, {'Content-Type': 'text/plain'});
        response.end('File not found!');
    }
});
 
server.listen(5000, '127.0.0.1', () => {
    console.log('Server is running at http://127.0.0.1:5000/');
});