/**
 * Changes the header, footer, body backgrounds
 * to red themed colors
 */
const applyRedTheme = () => {
    const header = document.querySelector('.header')
    header.style.backgroundColor = '#b50000'

    const footer = document.querySelector('.footer')
    footer.style.backgroundColor = '#4d0000'

    const body = document.querySelector('body')
    body.style.backgroundColor = '#fce6e6'
}

export default applyRedTheme