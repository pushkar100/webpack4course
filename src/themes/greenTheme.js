/**
 * Changes the header, footer, body backgrounds
 * to green themed colors
 */
const applyGreenTheme = () => {
    const header = document.querySelector('.header')
    header.style.backgroundColor = '#3cc402'

    const footer = document.querySelector('.footer')
    footer.style.backgroundColor = '#174a01'

    const body = document.querySelector('body')
    body.style.backgroundColor = '#e6ffdb'
}

export default applyGreenTheme