const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Pug 설정
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 설정 (CSS, 이미지 등)
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.get('/', (req, res) => {
  res.render('index', { title: 'Oaknut Theme', content: 'Welcome to Oaknut Clone!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
