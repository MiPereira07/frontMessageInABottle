// Importar o express
const express = require('express');

// Responsável pelas rotas
const router = express.Router();

// Index
router.get('/', (req, res) => {
    res.render('index')
})

// Rota para listar todas as mensagens via front
router.get('/listarTodos', (req, res) => {
    res.render('listarTodos')
})

//Rota para página de adição de mensanges via Front
router.get('/adicionar', (req, res)=>{
    res.render('adicionar')
})

//Rota para editar mensagens via Front
router.get('/editar/:id', (req, res)=>{
    res.render('editar')
})

//Rota para remover mensagem via front
router.get('/remover/:id', (req, res)=>{
    res.render('remover')
})

module.exports = router;
