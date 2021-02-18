const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Estou falando para o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body Parser -> Disponibilizar o body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;

    res.send(`Formulário recebido! Título: ${titulo} Descrição: ${descricao}`);
});

// Porta do servidor
app.listen(8888, () =>{
    console.log("app rodando!");
});