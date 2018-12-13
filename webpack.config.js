const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        bundle: './public/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
       rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
     plugins: [
        new VueLoaderPlugin()
    ]
}