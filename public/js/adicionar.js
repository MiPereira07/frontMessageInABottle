//Capturar o formulário da página ADICIONAR.EJS
const formAdicionar = document.getElementById("frm-adicionar")

//Capturar os campos da página ADICIONAR.EJS
const titulo = document.getElementById("titulo")
const descricao = document.getElementById("descricao")

//Adicionar a mensagem
formAdicionar.addEventListener("submit", (e)=>{
    e.preventDefault()

    const dados = {
        titulo: titulo.value,
        descricao: descricao.value
    }

    //Consultar API
    fetch('https://api-message-in-a-bottle.herokuapp.com/mensagem', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(dados)
    }).then((x)=>{
        window.location.href = '/'
    }).catch((e)=>{
        console.log(e)
    })  
})