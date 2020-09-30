const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>hell world</h1>');
});

app.get('/cats', (req, res) => {
  res.send('<h2>"Meow!<h2>');
});

app.get('/dogs', (req, res) => {
  res.send('<h2>"Woof!<h2>');
});

app.get('/cats_and_dogs', (req, res) => {
  res.send('<h2>"Dogs and cats living together...mass hysteria!<h2>');
});

// start listening on the given port and hostname
server.listen(port, hostname, () => {
  // once server is listening, log to the console to say so
  console.log(`Server running at http://${hostname}:${port}/`);
});
