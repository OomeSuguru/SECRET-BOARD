// リクエストを処理を行うハンドラに振り分ける
'use strict';
const postsHandler = require('./posts-handler');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    default:
      break;
  }
}

module.exports = {
  route: route
};