// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use('/ws', createProxyMiddleware({ target: 'https://arcana.aeoragy.com:18081', ws: true }));
};
