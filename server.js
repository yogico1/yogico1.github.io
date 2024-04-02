const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'yogico/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/yogico/build/index.html'));
});

app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/yogico/build/index.html'));
});