// Vue 设置跨域 ./vue.config.js

module.exports = {
    devServer: {proxy: {
        '/api/':{                               // 代理名
            target:"http://127.0.0.1:3000",     // 代理地址
            secure: false,
            changeOrigin: true,                 // 允许跨域
            pathRewrite:{'^/api':''}            
        }
    }}
} 