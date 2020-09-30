const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>hell world</h1>');
});

app.get('/greet/:name', (req, res) => {
  res.send(`<h2>"Hello,${req.params.name}!"<h2>`);
});

// app.get('/greet/Ahsoka', (req, res) => {
//   res.send('<h2>"Hello,Ahsoka!"<h2>');
// });
// app.get('/greet/Han', (req, res) => {
//   res.send('<h2>"Hello,Han!"<h2>');
// });

server.listen(port, hostname, () => {
  // once server is listening, log to the console to say so
  console.log(`Server running at http://${hostname}:${port}/`);
});
