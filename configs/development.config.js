const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = () => ({
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, '../dist') // Needs to be an absolute path
    },
    experiments: {
        topLevelAwait: true,
        importAsync: true
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
    },
    plugins: [
        new DashboardPlugin()
    ]
})