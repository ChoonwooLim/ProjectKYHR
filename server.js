const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static('public'));
app.use('/contents', express.static(path.join(__dirname, 'contents')));

// 메인 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});


