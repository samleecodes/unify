module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/_variables.scss";@import "@/styles/_globals.scss";',
      },
    },
  },

  chainWebpack: (config) => {
    const imgRule = config.module.rule('images');
    imgRule.use('file-loader')
      .loader('image-webpack-loader')
      .tap((options) => {
        const ret = options || {};
        ret.pngquant = {
          quality: [0.65, 0.9],
          speed: 4,
        };
        return ret;
      });
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
