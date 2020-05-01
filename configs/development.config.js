const path = require('path')

module.exports = () => ({
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist') // Needs to be an absolute path
    },
    devServer: {
        contentBase: '../dist',
        port: 3000
    }
})