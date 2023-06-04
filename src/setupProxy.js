const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(App) {
  App.use(
    createProxyMiddleware("/eorzeacollection", {
      target: "https://ffxiv.eorzeacollection.com",
      pathRewrite: {
        "eorzeacollection": ""
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