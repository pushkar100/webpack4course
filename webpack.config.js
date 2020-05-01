const path = require('path')

module.exports = ({ mode }) => ({
    mode,
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [ 'style-loader', 'css-loader' ]
            },
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
            }
        ]
    }
})