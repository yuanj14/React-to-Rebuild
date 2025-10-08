const http = require('http');

const server = http.createServer((req, res) => {
  // 设置响应头，告诉浏览器这是JSON格式
  res.setHeader('Content-Type', 'application/json');

  // 核心：这个服务器没有设置 Access-Control-Allow-Origin，所以会导致跨域错误
  // res.setHeader('Access-Control-Allow-Origin', '*'); // 如果取消这行的注释，跨域问题会被CORS解决

  if (req.url === '/api/data' && req.method === 'GET') {
    // 模拟数据库数据
    const data = {
      message: '这是来自后端服务器 (http://localhost:5000) 的秘密数据!',
      timestamp: new Date().toISOString()
    };
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`后端API服务器已启动，运行在 http://localhost:${PORT}`);
  console.log('它故意不处理跨域请求，用来模拟跨域问题。');
});