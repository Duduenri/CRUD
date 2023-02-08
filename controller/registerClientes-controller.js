import { clientService } from '../service/client-service.js'
 
const form = document.querySelector('[data-form]' )

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const nome = event.target.querySelector('[data-nome]').value
    const email = event.target.querySelector('[data-email]').value

    clientService.createClient(nome, email)
    .then(() => {
        window.location.href = '../screens/completed_registration.html'
    })
})