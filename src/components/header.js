import '../styles/header.css'

// Data required for the function to render the DOM:
const image = 'images/social-logo.png'

/**
 * A function that creates & returns the header dom element
 */
const createHeader = () => {
    // Create the top-most element:
    const Header = document.createElement('div')
    Header.classList.add('header')

    // Create child elements:
    const img = document.createElement('img')
    img.src = image

    // Append all child elements to parent:
    Header.appendChild(img)

    return Header
}

export default createHeader

/*
HTML template for understanding output of the above JS snippet: 
<div class="header">
    <img src="images/social-logo.png" />
</div>
*/