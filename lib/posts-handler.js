// /posts のリクエストを処理する
'use strict';
const pug = require('pug');
const contents = [];

// 値が渡された場合の処理
function handle(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(pug.renderFile('./views/posts.pug'))
      break;
    case 'POST':
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      const decoded = decodeURIComponent(body);
      const content = decoded.split('content=')[1];
      // const value = contents.push(content);
      contents.push(content);
      console.info('投稿されました: ' + content);
      console.info('投稿された全内容 ' + contents);
      // console.info(value)
      handleRedirectPosts(req, res);
    });
      break;
    default:
      break;
  }
}
// リダイレクト関数
function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

module.exports = {
  handle: handle
};