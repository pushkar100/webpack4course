const validate = require('schema-utils')
const { RawSource } = require('webpack-sources')

const schema = {
    type: 'object',
    properties: {
        text: {
            description: 'The text to inject into your HTML',
            type: 'string'
        }
    },
    additionalProperties: false
}

class BundleCommentsWebpackPlugin {
    constructor(options = {}) {
        validate(schema, options, { name: "BundleCommentsWebpackPlugin" })
        this.options = options
    }

    apply(compiler) {
         compiler.hooks.emit.tapPromise('BundleCommentsPlugin', (compilation) => {
            return new Promise(resolve => {
                compilation.chunks.forEach(chunk => {
                    for (let file of chunk.files) {
                        if (/\.js$/.test(file)) {
                            compilation.updateAsset(file, (old) => {
                                const fileSource = compilation.assets[file].source()
                                const { text } = this.options || {}
                                const formattedComment = `\n\n/*\n${text}\n*/\n\n`
                                return new RawSource(`${formattedComment}${fileSource}`)
                            })
                        }
                    }                    
                })
                resolve()
            })
        })
    }
}

module.exports = BundleCommentsWebpackPlugin