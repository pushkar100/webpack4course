import '../styles/footer.css'

import button from './button'

// Data required for the function to render the DOM:
const externalLink = 'https://github.com/pushkar100/webpack4course'

// setTimeout(() => { throw new Error('Custom error') }, 4000)

/**
 * A function that creates & returns the footer dom element
 */
const createFooter = () => {
    // Create the top-most element:
    const Footer = document.createElement('div')
    Footer.classList.add('footer')

    // Create child elements:
    const link = document.createElement('a')
    link.innerText = 'Source code'
    link.href = externalLink

    const madeWith = document.createElement('div')
    madeWith.innerHTML = 'Made with &#9829; during quarantine'

    // Create the buttons:
    const buttonHolder = document.createElement('div')
    const redButton = button('Red')
    const greenButton = button('Green')
    buttonHolder.appendChild(redButton)
    buttonHolder.appendChild(greenButton)

    // Change theme on clicking the buttons:
    redButton.addEventListener('click', () => {
        import(/* 
            webpackChunkName: 'redTheme',
            webpackPrefetch: true
        */ '../themes/redTheme.js')
        .then(({ default: redTheme }) => redTheme())
    })
    greenButton.addEventListener('click', () => {
        import(/* 
            webpackChunkName: 'greenTheme',
            webpackPrefetch: true
        */ '../themes/greenTheme.js')
        .then(({ default: greenTheme }) => greenTheme())
    })

    // Append all child elements to parent:
    Footer.appendChild(link)
    Footer.appendChild(madeWith)
    Footer.appendChild(buttonHolder)

    return Footer
}

export default createFooter 

/*
HTML template for understanding output of the above JS snippet: 
<div class="footer">
    <a href="https://github.com/pushkar100/webpack4course">Source code</a>
    <div>Made with love during quarantine</div>
</div>
*/