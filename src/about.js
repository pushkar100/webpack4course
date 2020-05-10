// The about page:
import { join } from 'lodash-es'

import './styles/index.css'
import './styles/about.css'

import createFooter from './components/footer'
import createFriends from './components/friends'
import createHeader from './components/header'
import createPosts from './components/posts'
import createUser from './components/user'

// Access body to be able to add html inside it:
const body = document.querySelector('body')

// Append header from createHeader():
body.appendChild(createHeader())

// Append User from createUser():
body.appendChild(createUser())

// Append some text:
const aboutHeader = document.createElement('h1')
aboutHeader.classList.add('about-header')
aboutHeader.innerText = join(['The', 'about', 'page'], ' ')

const aboutPara = document.createElement('p')
aboutPara.classList.add('about-para')
aboutPara.innerText = `
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. 
    Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco 
    laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, 
    sunt in culpa qui officia deserunt mollit anim id est laborum.
    `

const about = document.createElement('div')
about.classList.add('about')
about.appendChild(aboutHeader)
about.appendChild(aboutPara)
body.appendChild(about)

// Append Footer from createPosts():
body.appendChild(createFooter())

// DefinePlugin Demo:
console.log('APP VERSION', VERSION)