import { clientService } from '../service/client-service.js'

const createNewLine = (nome, email) => {
    const newCustomerLine = document.createElement('tr')
    const content = `
    
    <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../screens/edit_customer.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
        `

        newCustomerLine.innerHTML = content
        newCustomerLine.dataset.id = id
        return newCustomerLine
}

const table = document.querySelector('[data-tabela]')

table.addEventListener('click', (event)=> {
    let deleteButton = event.target.className === 'botao-simples botao-simples--excluir'
    if(deleteButton){
        const clienteLine = event.target.closest('[data-id]')
        let id = clienteLine.dataset.id
        clientService.removeClient(id)
        .then(()=>{
            clienteLine.remove()
        })
    }
})

clientService.clientsList() 
.then( data => {
    data.forEach(element => {
    table.appendChild(createNewLine(element.nome,element.email, element.id))
})}) 