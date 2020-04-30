// The main file: Starts execution of Javascript
// It invokes methods defined in other files (components)

// Access body to be able to add html inside it:
const body = document.querySelector('body')

// Append header from createHeader():
body.appendChild(createHeader())

// Append User from createUser():
body.appendChild(createUser())

// Append Posts from createPosts():
body.appendChild(createPosts())

// Append Friends from createFriends():
body.appendChild(createFriends())

// Append Footer from createPosts():
body.appendChild(createFooter())
