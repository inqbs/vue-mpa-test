module.exports = {
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
  },

  assetsDir: 'static'
};
