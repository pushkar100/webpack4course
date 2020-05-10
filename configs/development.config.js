const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => ({
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            title: 'Social Media Website',
            meta: {
                course: 'Webpack 4 session with Pushkar & Ankush'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about'],
            title: 'About: Social Media Website',
            meta: {
                course: 'Webpack 4 session with Pushkar & Ankush'
            }
        })
    ]
})