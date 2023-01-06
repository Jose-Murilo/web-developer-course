const cep = document.querySelector('#cep')
const logradouro = document.querySelector('#logradouro')
const numero = document.querySelector('#numero')
const complemento = document.querySelector('#complemento')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')
const uf = document.querySelector('#uf')
const button = document.querySelector('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

    async function fetchApi(apiValue) {
        const api = `https://viacep.com.br/ws/${apiValue}/json/`
    
        const response = await fetch(api).then(data => data.json())
        console.log(response);

        logradouro.value = response.logradouro
        cidade.value = response.localidade
        bairro.value = response.bairro
        uf.value = response.uf
    }
    
    fetchApi(cep.value)
})

