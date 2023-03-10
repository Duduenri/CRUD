const clientsList = () => {
    return fetch('http://localhost:3000/profile')
    .then ( response => {
        return response.json( )

    })
}

const createClient = (name, email) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( response => {
        return response.body
    })
}

const removeClient = (id) => { 
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

export const clientService = {
    clientsList,
    createClient,
    removeClient
}