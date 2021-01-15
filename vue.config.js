const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devServer: {
    port: 8080,
    // https: true
  },
  pages: {
    index: {
      entry: 'src/pages/main/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    shop: {
      entry: 'src/pages/shop/main.js',
      template: 'public/layout-shop.html',
      filename: 'shop.out.html',
    },
    page: {
      entry: 'src/pages/pagination/main.js',
      template: 'public/index.html',
      filename: 'page.out.html',
    },
  },

  assetsDir: 'static',

  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }),
    ],
    resolve: {
      alias: {
        'bootstrap-vue$': 'bootstrap-vue/esm/index.js',
        jquery: 'jquery/dist/jquery.slim.js',
        moment: 'moment/src/moment',
      }
    }
  },

  /* 
  chainWebpack: config => {
    config.module
      .rule(/\.js$/)
      .exclude
        .add(/node_modules\/(?!bootstrap-vue\/src\/)/)
        .end()
      .use('babel-loader')
        .loader('babel-loader')
        .options({
          presets: ['@babel/preset-env']
        })
  },
 */
};
