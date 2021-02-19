const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');
const Resposta = require('./database/Resposta');

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });

// Estou falando para o express usar o ejs como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body Parser -> Disponibilizar o body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    // SELECT * ALL FROM perguntas
    Pergunta.findAll({raw: true, order:[
        ["id", "DESC"] //ASC crescente
    ]}).then(perguntas => {
        res.render("index", {
            perguntas
        });
    });
    
});


app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});


app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    // res.send(`Formulário recebido! Título: ${titulo} Descrição: ${descricao}`);

    Pergunta.create({
        titulo,
        descricao
    }).then(() => {
        res.redirect("/");
    });
    
});


app.get("/pergunta/:id", (req, res) => {
    const id = req.params.id;

    Pergunta.findOne({
        where: {id}
    }).then(pergunta => {
        if(pergunta != undefined){ //Pergunta encontrada
            res.render("pergunta", {
                pergunta
            });
        } else { //Não encontrada
            res.redirect("/");
        }
    })

});


// Porta do servidor
app.listen(8888, () =>{
    console.log("app rodando!");
});