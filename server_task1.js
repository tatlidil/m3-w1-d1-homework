const http = require('http');

const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Set response content
        res.write('<h1>Home Page.</h1>');
        res.end();
    } else if (req.url === '/about') {
        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Set response content
        res.write('<h1>About Page.</h1>');
        res.end();
    } else if (req.url === '/contact') {
        // Set response header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Set response content
        res.write('<h1>Contact Page.</h1>');
        res.end();
    } else {
        // No matching endpoint found
        res.writeHead(404, {'Content-Type': 'text/html'});
        // Set response content
        res.write('<h1>Invalid Request!</h1>');
        res.end();
    }
});

// Server listens on port 5000
server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running....`);
});
