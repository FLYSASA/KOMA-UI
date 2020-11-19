const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递给 less-loader
        paths: [path.join(__dirname, 'src')],
      }
    }
  }
}