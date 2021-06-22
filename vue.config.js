module.exports = {
  productionSourceMap: process.env.NODE_ENV == "production" ? false : true,
  lintOnSave: true,
  configureWebpack: {
    performance: {
      maxAssetSize: 1048576, // int (in bytes),
      maxEntrypointSize: 1048576, // int (in bytes)
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
      },
    },
    // configureWebpack: {
    //   devtool: 'source-map'
    // }
  },
  pwa: {
    name: "guawme",
    msTileColor: "#000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "white",
    manifestOptions: {
      name: "Guaw v1.0",
      short_name: "Guaw",
      start_url: ".",
      display: "fullscreen",
      theme_color: "#f00",
      background_color: "#ffffff",
    },
  },
};
