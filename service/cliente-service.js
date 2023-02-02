const createNewLine = (nome, email) => {
    const newCustomerLine = document.createElement('tr')
    const content = `
    
    <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
            <ul class="tabela__botoes-controle">
                <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
            </ul>
        </td> 
        `

        newCustomerLine.innerHTML = content
        return newCustomerLine
}

const table = document.querySelector('[data-tabela]')

const clientsList = () => {
    return fetch('http://localhost:3000/profile')
    .then ( response => {
        return response.json()

    })
}

clientsList() 
.then( data => {
    data.forEach(element => {
    table.appendChild(createNewLine(element.nome,element.email))
})})