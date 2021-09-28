// Capturar o body da tabela
const bodyMensagens = document.getElementById("bodyMensagens");

// Função GetMensagens
const getMensagens = async () => {
    const resposta = await fetch("https://api-message-in-a-bottle.herokuapp.com/mensagem");
    const dados = await resposta.json();
    dados.map(mensagem => {
       
        bodyMensagens.innerHTML += `
            <tr>
                <td style="display:none;">${mensagem.id}</td>
                <td>${mensagem.titulo}</td>
                <td>${mensagem.descricao}</td>
                <td>
                    <a href="/editar/${mensagem.id}"> Editar </a> / 
                    <a href="/remover/${mensagem.id}"> Remover </a>
                </td>
            </tr>
        `
    });
};

getMensagens();