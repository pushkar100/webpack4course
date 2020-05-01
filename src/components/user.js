// Data required for the function to render the DOM:
import userInfo from '../data/userInfo.json'

// Refactor later: Put this data into a CSV file
const hobbiesCommaSeparated = 'Cricket, Football, Hockey, Drawing'

/**
 * A function that creates & returns the user dom element
 */
const createUser = () => {
    // Create the top-most element:
    const User = document.createElement('div')
    User.classList.add('user')

    // Create child elements:
    const avatar = document.createElement('div')
    avatar.classList.add('avatar')

    const userData = document.createElement('div')
    userData.classList.add('user-data')

    for (let userItem in userInfo) {
        const userInfoItem = document.createElement('div')
        userInfoItem.classList.add('user-info-item')
        userInfoItem.innerText = `${userItem}: ${userInfo[userItem]}`
        userData.appendChild(userInfoItem)
    }
    // Add Hobbies in the end: 
    const hobbies = document.createElement('div')
    hobbies.classList.add('user-info-item')
    hobbies.classList.add('hobbies')
    hobbies.innerText = `Hobbies: ${hobbiesCommaSeparated.split(', ').join(' + ')}`
    userData.appendChild(hobbies)

    // Append all child elements to parent:
    User.appendChild(avatar)
    User.appendChild(userData)

    return User
}

export default createUser

/*
HTML template for understanding output of the above JS snippet: 
<div class="user">
    <div class="avatar"></div>
    <div class="user-data">
        <div class="user-info-item">Name: Arun kumar</div>
        <div class="user-info-item">Age: 31</div>
        <div class="user-info-item">Bio: I like making friends. Please be my friend!</div>
        <div class="user-info-item">Hobbies: Cricket, Football, Hockey, Drawing</div>
    </div>
</div>
*/