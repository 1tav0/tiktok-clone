const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Replace this with the URL of the external resource
        changeOrigin: true,
        timeout: 60000
    })
  );
};