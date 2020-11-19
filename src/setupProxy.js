const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://www.web-jshtml.cn/api/react',
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  );
  // app.use(
  //   '/manage/api',
  //   createProxyMiddleware({
  //     target: 'http://admintest.happymmall.com:7000',
  //     changeOrigin: true,
  //   })
  // );
};