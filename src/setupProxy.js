const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/glamour", {
      target: "https://ffxiv.eorzeacollection.com/glamour",
      pathRewrite: {
        "^/glamour": ""
      },
      changeOrigin: true
    }),
    createProxyMiddleware("/ver", {
      target: "https://ffxiv.gamerescape.com",
      pathRewrite: {
        "^/ver": ""
      },
      changeOrigin: true
    }),
  )
}