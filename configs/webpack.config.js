const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const BundleCommentsPlugin = require('./plugins/BundleCommentsWebpackPlugin')
const path = require('path')

const modeConfig = mode => require(`./${mode}.config.js`)()

module.exports = ({ mode }) => {
    return webpackMerge({
        mode,
        optimization: {
            runtimeChunk: false
        },
        experiments: {
            topLevelAwait: true,
            importAsync: true
        },
        cache: {
            type: 'filesystem'
        },
        entry: './src/index.js',
        module: {
            rules: [
                {
                    test: /\.(png|jpg|jpeg|svg|gif)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[name].[ext]',
                            outputPath: 'images'
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: {
                                            esmodules: true
                                        },
                                        useBuiltIns: 'usage'
                                    }
                                ]
                            ],
                            plugins: []
                        }
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: path.resolve(__dirname, './loaders/warning-loader.js'),
                        options: {
                            regex: /import\(/ // 'blah' // will throw an error
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Social Media Website',
                meta: {
                    course: 'Webpack 4 session with Pushkar & Ankush'
                }
            }),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                VERSION: JSON.stringify('1.0.0'),
                'process.env.NODE_ENV': JSON.stringify(mode)
            }),
            new BundleCommentsPlugin({
                text: "VERSION: 1.0.0",
                // author: "Pushkar DK" // Validate will give an error
            })
        ]
    },
    modeConfig(mode))
}