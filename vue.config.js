const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title= '营地大屏'
          return args
        })
    },
    devServer: {
        proxy: {
            '^/foo': {
                target: `http://localhost:10101`,
                ws: true,
                changeOrigin: true
            },
            '^/api': {
                target: `http://localhost:10101`,
                //port: '9991',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/ls'
                }
            }
        }
    }
})
