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

    // Create the link to generate theme-changer buttons:
    const buttonHolder = document.createElement('div')
    const generateThemeButtons = document.createElement('a')
    generateThemeButtons.innerText = 'Select a different theme'

    generateThemeButtons.addEventListener('click', (e) => {
        e.preventDefault()

        // Remove the 'a' link from buttonHolder:
        buttonHolder.innerHTML = ''

        // Fetch the buttons from the remote:
        const getRedButton = () => import('components/redButton')
        const getGreenButton = () => import('components/greenButton')

        console.log(getRedButton())

        // Replace buttonHolder contents with the buttons:
        getRedButton().then(({ default: redButton }) => {
            // Append button to div:
            buttonHolder.appendChild(redButton)

            // Change theme to red on clicking the button:
            redButton.addEventListener('click', () => {
                import('../themes/redTheme.js')
                .then(({ default: redTheme }) => redTheme())
            })
        })
        
        getGreenButton().then(({ default: greenButton }) => {
            // Append button to div:
            buttonHolder.appendChild(greenButton)

            // Change theme to green on clicking the button:
            greenButton.addEventListener('click', () => {
                import('../themes/greenTheme.js')
                .then(({ default: greenTheme }) => greenTheme())
            })
        })
    })

    buttonHolder.appendChild(generateThemeButtons)

    // Append all child elements to parent:
    Footer.appendChild(link)
    Footer.appendChild(madeWith)
    Footer.appendChild(buttonHolder)

    return Footer
}

export default createFooter 

// Top level await example:
const awaitVal = await new Promise(resolve => setTimeout(() => resolve(10), 2000))
console.log(awaitVal)

/*
HTML template for understanding output of the above JS snippet: 
<div class="footer">
    <a href="https://github.com/pushkar100/webpack4course">Source code</a>
    <div>Made with love during quarantine</div>
</div>
*/