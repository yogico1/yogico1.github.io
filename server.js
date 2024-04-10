const express = require('express');
const path = require('path');
const app = express();
// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'yogico/build')));

// 모든 경로에 대해 index.html로 리다이렉션
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/yogico/build/index.html'));
});