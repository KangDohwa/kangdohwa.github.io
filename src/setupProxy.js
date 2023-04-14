const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/eorzeacollection", {
      target: "https://ffxiv.eorzeacollection.com",
      pathRewrite: {
        "^/eorzeacollection": ""
      },
      changeOrigin: true
    }),
    createProxyMiddleware("/wiki", {
      target: "https://ffxiv.gamerescape.com/wiki",
      pathRewrite: {
        "^/wiki": ""
      },
    }),
  )
}