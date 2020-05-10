const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const modeConfig = mode => require(`./${mode}.config.js`)()

module.exports = ({ mode }) => {
    return webpackMerge({
        mode,
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        },
        entry: {
            index: './src/index.js',
            about: './src/about.js'
        },
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
                }
            ]
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
            }),
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                VERSION: JSON.stringify('1.0.0'),
                'process.env.NODE_ENV': JSON.stringify(mode)
            })
        ]
    },
    modeConfig(mode))
}