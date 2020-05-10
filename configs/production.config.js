const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const terserPlugin = require('terser-webpack-plugin')
const compressionPlugin = require('compression-webpack-plugin')

module.exports = () => ({
    devtool: 'nosources-source-map',
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist') // Needs to be an absolute path
    },
    optimization: {
        minimizer: [new terserPlugin(), new OptimizeCssAssetsPlugin()]
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new compressionPlugin({
            filename: '[path].gz',
            test: /\.(js|css)$/,
            algorithm: 'gzip'
        })
    ]
})