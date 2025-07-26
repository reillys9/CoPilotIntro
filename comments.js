// Create web server
function createWebServer() {
    // Initialize server
    const server = require('http').createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    });

    // Start listening on port 3000
    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });
}