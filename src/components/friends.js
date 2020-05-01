import '../styles/friends.css'

import { snakeCase } from 'lodash-es'
import { wrapWithParentheses } from '../helpers/index'

/**
 * A function that creates & returns the friends' dom element
 */
const createFriends = () => {
    // Create the top-most element:
    const Friends = document.createElement('div')
    Friends.classList.add('friends')

    // Create child elements:
    const friendsHeader = document.createElement('div')
    friendsHeader.classList.add('friends-header')
    friendsHeader.innerText = 'Friends'

    const friendsList = document.createElement('div')
    const friendsData = [
        { name: 'John', status: 'Currently partying' },
        { name: 'Neha', status: 'In search of food...' },
        { name: 'Rahul', status: 'Out Hiking in the woods' }
    ]
    for (let friend of friendsData) {
        const { name, status } = friend
        const friendDOM = document.createElement('div')
        friendDOM.classList.add('friend')
        friendDOM.innerText = `${name} ${
            wrapWithParentheses(snakeCase(status)) // Lodash use
        }`
        friendsList.appendChild(friendDOM)
    }

    // Append all child elements to parent:
    Friends.appendChild(friendsHeader)
    Friends.appendChild(friendsList)

    return Friends
}

export default createFriends

/*
HTML template for understanding output of the above JS snippet: 
<div class="friends">
    <div class="friends-header">Friends</div>
    <div>
        <div class="friend">John (currently_partying)</div>
        <div class="friend">Neha (in_search_of_food)</div>
        <div class="friend">Rahul (out_hiking_in_the_woods)</div>
    </div>
</div>
*/