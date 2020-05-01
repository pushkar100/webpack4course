import { join } from 'lodash-es'
import { joinByPipe, convertTo12hrClock } from '../helpers/index'

// Data required for the function to render the DOM:
const postsData = [
    [ 'Planning to finish the book by the year 2030', '22:00' ],
    [ 'Just started "Javascript: The Definitive Guide"', '6:30' ],
    [ 'I feel good today!', 'Yesterday' ],
    [ 'Binge-watching stuff thanks to the lockdown! Contagion is nice :)', 'Last week' ]
]

/**
 * A function that creates & returns the posts' dom element
 */
const createPosts = () => {
    // Create the top-most element:
    const Posts = document.createElement('div')
    Posts.classList.add('posts')

    // Create child elements:
    const postHeader = document.createElement('div')
    postHeader.classList.add('posts-header')
    postHeader.innerText = 'Posts'

    const arrayOfPosts = []
    for (let post of postsData) {
        arrayOfPosts.push(`<div class="post">${
            joinByPipe(post[0], convertTo12hrClock(post[1]))
        }</div>`)
    }
    const collectPosts = document.createElement('div')
    collectPosts.innerHTML = join(arrayOfPosts, '\n') // Lodash use

    // Append all child elements to parent:
    Posts.appendChild(postHeader)
    Posts.appendChild(collectPosts)

    return Posts
}

export default createPosts

/*
HTML template for understanding output of the above JS snippet: 
<div class="posts">
    <div class="posts-header">Posts</div>
    <div>
        <div class="post">Just started "Javascript: The Definitive Guide". Planning to finish it by the next decade | Posted at 10pm</div>
        <div class="post">I feel good today! | Posted yesterday</div>
        <div class="post">Binge-watching stuff thanks to the lockdown! Contagion is nice :) | Posted last week</div>
    </div>
</div>
*/