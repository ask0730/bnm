const express = require('express');
const app = express();
const port = 80;

// 添加一个 GET 请求的路由
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});


// 启动服务
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
