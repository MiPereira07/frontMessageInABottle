// Importar o express
const express = require('express');

// Importar o path
const path = require('path');

// Instância do express
const app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas Estáticas
app.use('/scripts', express.static(path.join(__dirname, 'public')));
app.use('/styles', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public')));

// Importar o Routes
const routes = require('./routes/routes');

// Routes
app.use(routes);

// Ouvir o servidor
app.listen(8081, () => {
    console.log('Conectado a porta 8081 ( http://localhost:8081 )')
})