// create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'comments.html'), (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (req.url === '/comments') {
        fs.readFile(path.join(__dirname, 'comments.json'), (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(data);
            res.end();
        });
    }
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
