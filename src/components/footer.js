import '../styles/footer.css'

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
    
    // The link to /about page:
    const aboutLink = document.createElement('a')
    if (window.location.pathname === '/') {
        aboutLink.innerText = 'About'
        aboutLink.href = './about.html'
    } else {
        aboutLink.innerText = 'Home'
        aboutLink.href = './index.html'
    }
    

    const madeWith = document.createElement('div')
    madeWith.innerHTML = 'Made with &#9829; during quarantine'

    // Append all child elements to parent:
    Footer.appendChild(link)
    Footer.appendChild(aboutLink)
    Footer.appendChild(madeWith)

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