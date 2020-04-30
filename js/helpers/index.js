// A function that joins two string with a ' | '
// Ex: `a`, `b` become `a | b`
const joinByPipe = (str1, str2) => `${str1} | ${str2}`

// A function that joins two string with an ' * '
// Ex: `a`, `b` become `a * b`
const joinByAsterisk = (str1, str2) => `${str1} * ${str2}`

// Next function uses lodash:
// A function that converts 24 hour clock to 12 hour clock
// Ex: `23:20` becomes `11:20pm`
const convertTo12hrClock = timeStr => {
    const timeRegex = /\d+:\d+/

    // Core logic: Mapping 24 format hour to 12 hour format
    // Also generating 'am' or 'pm'
    if (timeRegex.test(timeStr)) {
        const [ hours, minutes ] = _.split(timeStr, ':') // Lodash use
        const finalHours = hours > 12 ? hours - 12 : hours
        const amOrPm = hours > 12 ? 'pm' : 'am'
        return `${finalHours}:${minutes}${amOrPm}`
    }

    return timeStr
}

// A function that wraps a string in `()`.
// Ex: `Hey there` becomes `(Hey there)`
const wrapWithParentheses = (str) => `(${str})`

// A utility function not used anywhere:
// * Dead code alert! *
const addTwoNumbers = (a, b) => a + b