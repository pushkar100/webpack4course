const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = () => ({
    devtool: 'nosources-source-map',
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist') // Needs to be an absolute path
    },
    optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCssAssetsPlugin()],
        chunkIds: 'named'
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
        new CompressionPlugin({
            filename: '[path].gz',
            test: /\.(js|css)$/,
            algorithm: 'gzip'
        })
    ]
})