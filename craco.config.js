const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@src": "./src",
          "@component": "./src/component",
          "@Clock": "./src/component/Clock",
          "@Fonts": "./src/component/Fonts",
          "@SheetGenerator": "./src/component/SheetGenerator",
          "@Pages": "./src/pages",
        }
      },
    },
  ],
}