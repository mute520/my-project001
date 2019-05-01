module.exports = {
  baseUrl: './',
  outputDir: 'build',
  productionSourceMap: false,
  assetsDir: 'static',
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        // target: 'http://10.113.80.60:8083/',
        target: 'http://localhost:80/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api/smartdoc' //发现路径开头是api的url,会在url前面拼接target值，根据设置api会替换成api/smartdoc.
        }
      }
    }
  }
}