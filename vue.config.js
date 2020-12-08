module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/_variables.scss";@import "@/styles/_globals.scss";',
      },
    },
  },

  chainWebpack: (config) => {
    config.module
      .rule('url-loader')
      .test(/\.(png|jpg|JPG|gif)$/)
      .use('url-loader')
      .loader('url-loader?mimetype=image/png')
      .end()
      .rule('file-loader')
      .test(/\.(ttf|otf|eot|woff|woff2)$/)
      .use('file-loader')
      .loader('file-loader')
      .end();
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
