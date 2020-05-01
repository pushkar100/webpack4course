const path = require('path')

module.exports = () => ({
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, '../dist') // Needs to be an absolute path
    }
})