//Capturar Formulário de Edição de Mensagens
const frmEditar = document.getElementById("frm-editar")

//Capturar no formulário o ID que vem na URL
const id = window.location.href.split('editar/')[1]

//Capturar campos no formulário
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");
    const idBody = document.getElementById("id");
    

//Preencher os campos no formulário de edição
const getMensagensById = async () =>{
    const resposta = await fetch(`https://api-message-in-a-bottle.herokuapp.com/mensagem/${id}`);
    const dados = await resposta.json();
    titulo.value = dados[0].titulo
    descricao.value = dados[0].descricao
    idBody.value = dados[0].id
}
getMensagensById()

//Editar mensagem
frmEditar.addEventListener("submit", (e)=>{
    e.preventDefault()

    const dados = {
        titulo: titulo.value,
        descricao: descricao.value,
        id: idBody.value
    }

    //Consultar API
    fetch('https://api-message-in-a-bottle.herokuapp.com/mensagem', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify(dados)
    }).then((x)=>{
        window.location.href = '/'
    }).catch((e)=>{
        console.log(e)
    })  
})