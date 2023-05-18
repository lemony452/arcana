// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use('/ws', createProxyMiddleware({ target: 'https://k8d107.p.ssafy.io:18081', ws: true }));
};
