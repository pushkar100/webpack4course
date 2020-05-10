/**
 * Returns a button with given text
 * @param {String} text text of the button
 * @returns DOM element which is a button
 */
const button = (text, onClick) => {
    const button = document.createElement('button')
    button.style.margin = '5px'
    button.style.padding = '5px'
    button.style.borderRadius = '5px'
    button.style.backgroundColor = '#fff'
    button.innerText = text

    return button
}

export default button