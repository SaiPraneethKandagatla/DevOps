const http = require('node:http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Welcome to Node.js Server");
}).listen(3000, () => {
  console.log("Server running on port 3000");
});
