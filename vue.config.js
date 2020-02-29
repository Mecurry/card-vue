const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')

module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 375,
            unitPrecision: 3,
            minPixelValue: 1,
            mediaQuery: false,
            viewportUnit: 'vw',
            // 该项仅在使用 Circle 组件时需要
            // 原因参见 https://github.com/youzan/vant/issues/1948
            selectorBlackList: ['van-circle__layer', '.ignore', '.hairlines']
          })
        ]
      }
    }
  }
}

