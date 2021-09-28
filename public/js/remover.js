//Capturar o formulário da página remover.ejs
const frmRemover = document.getElementById("frm-remover")

//Capturar no formulário o ID que vem na URL
const id = window.location.href.split('remover/')[1]

//Capturar campos no formulário
const idBody = document.getElementById("id");

const getMensagensById = async () =>{
    const resposta = await fetch(`https://api-message-in-a-bottle.herokuapp.com/mensagem/${id}`);
    const dados = await resposta.json();
    idBody.value = dados[0].id
}
getMensagensById()

//Remover da Base
frmRemover.addEventListener("submit", (e)=>{
    e.preventDefault()
    const dados = {
        id: idBody.value
    }
    fetch('https://api-message-in-a-bottle.herokuapp.com/mensagem', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'DELETE',
        body: JSON.stringify(dados)
    }).then((x)=>{
        window.location.href ='/'
    }).catch((e)=>{
        console.log(e)
    })
})