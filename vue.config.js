module.exports = {
    devServer: {
        port: 3333,
        open: true  //在服务器启动后打开默认浏览器
    },

//sass-loader 传递选项（相当于全局可调用这些样式）
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/_varitable.scss";`
            }
        }
    }
}