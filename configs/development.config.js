const path = require('path')

module.exports = () => ({
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist') // Needs to be an absolute path
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ]
            },
        ]
    },
    devServer: {
        contentBase: '../dist',
        port: 3000,
        hot: true
    }
})