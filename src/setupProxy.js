const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/eorzeacollection", {
      target: "https://ffxiv.eorzeacollection.com",
      pathRewrite: {
        "https://jjae.xyz/eorzeacollection": ""
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