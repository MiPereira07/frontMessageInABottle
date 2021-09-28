// Capturar o body da tabela
const bodyMensagens = document.getElementById("bodyMensagens");

// Função GetMensagens
const getMensagens = async () => {
    const resposta = await fetch("https://api-message-in-a-bottle.herokuapp.com/");
    const dados = await resposta.json();
    dados.map(mensagem => {
       
        bodyMensagens.innerHTML += `
            <tr>
                <td style="display:none;">${mensagem.id}</td>
                <td>${mensagem.descricao}</td>
            </tr>
        `
    });
};

getMensagens();