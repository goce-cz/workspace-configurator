const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => app.use(
  process.env.REACT_APP_API_PATH || '/api',
  createProxyMiddleware({
    target: `http://localhost:${process.env.API_PORT || 3001}`,
    changeOrigin: true
  })
)
