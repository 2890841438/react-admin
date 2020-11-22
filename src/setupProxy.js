const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    [process.env.REACT_APP_API],
    createProxyMiddleware({
      target: process.env.REACT_APP_BASE_URL,
      changeOrigin: true,
      pathRewrite: {
        [`^${process.env.REACT_APP_API}`]: ""
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