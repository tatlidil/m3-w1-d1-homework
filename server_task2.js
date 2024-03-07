const http = require('http');
const fs = require('fs');
const port = 5000;

const server = http.createServer((req, res) => {
    let filePath = '';

    // Determine which file to serve based on the URL
    if (req.url === '/' || req.url === '/home') {
        filePath = 'home.html';
    } else if (req.url === '/about') {
        filePath = 'about.html';
    } else if (req.url === '/contact') {
        filePath = 'contact.html';
    }

    // Serve the file if one was matched
    if (filePath) {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading the file.');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        // No matching file, respond with 404
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running....`);
});
