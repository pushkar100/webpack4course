const validate = require('schema-utils')
const { getOptions } = require('loader-utils')
const chalk = require('chalk')

const schema = {
    type: 'object',
    properties: {
        regex: {
            description: 'The regex to match in source and warn the developer against its usage',
            type: 'object'
        }
    }
}

function warningLoader (source) {
    const options = getOptions(this)
    const configuration = { name: 'warning-loader', baseDataPath: 'WarningLoader options' }

    validate(schema, options, configuration)

    const { regex = /\./ } = options || {}

    if (regex.test(source)) {
        console.warn(chalk.yellow.bold(`\n\nWarning Loader: \n\n\tUse of ${regex} inside ${this.resource}\n\n`))
    }

    return source
}

module.exports = warningLoader