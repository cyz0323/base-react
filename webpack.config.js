const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');// 导入在内存中存在的index页面插件

// 创建实例
const htmlPlugin  = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html' 
});

module.exports = {
    //生产环境
    mode: 'production',      
    // 组件
    plugins: [
        htmlPlugin
    ],
    // 第三方模块规则
    module: { 
        rules: [
            {
                test: /\.js|jsx$/, 
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            }
        ]
    },
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
            // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
}