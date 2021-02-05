function submitData(name, email) {
// let userData = {
//     name: 'Dj James',
//     email: 'DjJames@gmail.com'
// };

let configObj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },

    body: JSON.stringify({
        name: 'Dj James',
        email: 'DjJames@gmail.com'
    })
};

fetch('http://localhost:3000/users')
.then(resp => resp.json()) 
.then(user => user)
}

submitData(name, email)