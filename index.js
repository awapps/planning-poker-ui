const http = require('http');
const fs   = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    const htmlFile = fs.createReadStream('./index.html');

    res.setHeader('Content-Type', 'text/html');
    htmlFile.pipe(res);
});

console.log(`App is running on port ${PORT}`);

server.listen(PORT);
